title=Wordpress to JBake content conversion tool
date=2015-12-31T12:20:18
type=post
tags=github, jbake, jenkins, openshift, sonarqube, Web Development, wordpress
status=published
wp-content=true
~~~~~~
Over the Christmas break, I've been coding up a tool to convert all my Wordpress posts into JBake content. The idea is that it would take a Wordpress Export file and turn it into the content and assets folders in JBake. Since I've got my JBake instance running in Gradle, I'm writing this as a Gradle plugin. That being said, I'm not entirely comfortable with Groovy, so there's only a small Groovy shim between the Gradle build and the main application, which is pure Java. If this plugin gets some traction with other people, I'll write a similar shim for a Maven plugin.

The plugin's called wp2jbake and I've open-sourced the code (GPL2). It can be [found on GitHub here][].

The most difficult part of all this, oddly enough, has been trying to setup Jenkins and Sonar on [OpenShift][]. OpenShift is a cloud-based PaaS product from RedHat, and they give you 3 small gears for free (which seems perfect for a small, opensource CI platform). I ran into two primary problems. First, I'm not an ops guy, so every step of this is a painstaking example of how not to go about setting these things up. More importantly, it turns out it's impossible within OpenShift to setup what I'm looking for without going over the 3 gear limit.

"You're going over the 3 gear limit," some of the more informed of you are saying. "But it sounds like you only need two gears, one for Jenkins and one for Sonar. Three, max, if the database is on its own gear." Which is exactly what I thought, but I ran into certain problems specific to OpenShift's restrictions.

First, we have to talk about how OpenShift handles applications. When you create an application, first you need a "web" application to handle web requests. This can be something basic like a Tomcat or PHP instance, or something more complete like Jenkins. You can then add to this web application additional "cartridges," things like databases or certain clients that don't require inbound web requests. You can't have more than one web cartridge in an application.

OpenShift also has a concept of "scalable". When you create a web application, you can make it scalable, which means it can dynamically spin up instances of itself on additional gears (if your account has them open). There are certain exceptions to this; Jenkins, for instance, can't be scalable because it shares file resources. Similarly, the "DIY" cartridge which I was using to install Sonar could not be made scalable for the same reason. Sonar, however, requires a database instance (unless you're using the embedded H2 instance, but then what's the point? If it restarts, you'll lose your data.)

Sonar also requires this database instance to be accessible to both the client and the server, our client in this case being our Jenkins instance. The Jenkins and DIY cartridges are both web cartridges, so they must be different applications. But to be externally accessible, the database has to sit on its own gear, either in one of these applications or on a different one. Neither Jenkins nor DIY can be made scalable, which means the database can't be a cartridge on either of them. A database is not a web cartridge, so it can't sit as its own application. So, to get around this, I could make a different app scalable (PHP or NodeJS or something) and just ignore the web part of that. Problem solved, right? Except count the gears:

1 - Jenkins application

1 - DIY Sonar application

2 - Database application (1 for the web app that I'm not even using and 1 for the database)

Is there a way around this? Not right now. There's been a feature request for at least two years to make a scalable DIY cartridge, but it hasn't happened yet. It seems strange to me that you can't spin up a solitary gear with a database, but there you go.

So, right now I do have a Jenkins server up and running and polling from [GitHub][found on GitHub here] every hour, but I'm going to have to setup a local SonarQube instance until/if I find a better solution.


[found on GitHub here]: https://github.com/Azuaron/wp2jbake
[OpenShift]: https://www.openshift.com/
