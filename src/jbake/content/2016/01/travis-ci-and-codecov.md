title=Travis CI and Codecov
date=2016-01-11T15:56:12
type=post
tags=codecov, continuous integration, jenkins, openshift, programming, sonarqube, travis ci, Web Development
status=published
wp-content=true
~~~~~~
I ended up at OpenShift because I was looking for a free Jenkins solution, Jenkins being the CI tool with which I'm most familiar. But, I've since discovered [Travis CI][], which is incredibly open-source friendly and perfect for this plugin project. Along with that, I discovered [Codecov][] which stores code coverage statistics (calculated with [Jacoco][]). With both of these up and running, there's no need for the Jenkins solution on OpenShift.

So, what to do with OpenShift? With all three gears open, I can get a SonarQube instance running (one gear for the server, one gear for the unused scalable web front, and one gear for the database). That being said, having Travis and Codecov running significantly reduces the need to get that running, so it's been put on the back burner for the moment.


[Travis CI]: https://travis-ci.org/Azuaron/wp2jbake
[Codecov]: https://codecov.io/github/Azuaron/wp2jbake?ref=master
[Jacoco]: http://eclemma.org/jacoco/trunk/
