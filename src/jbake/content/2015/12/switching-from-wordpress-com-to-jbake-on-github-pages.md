title=Switching from Wordpress.com to JBake on GitHub pages
date=2015-12-19T14:02:23
type=post
tags=jbake, markdown, programming, Site News
status=published
wp-content=true
~~~~~~
In an effort to cut costs, I recently migrated from a hosted site to Wordpress.com. Wordpress.com's about a tenth the price of a hosted solution, but comes with some pretty significant caveats (the biggest being their "no plugins" rule). As a programmer, not having plugins essentially hamstrings my ability to fiddle with the site, something I'm wont to do every few months.

I've also been investigating static site generators, which have intrigued me for a while. Compared to dynamic sites, a static site is blazing fast (since no calculations need to be performed, it just serves the pages), but they also come with some caveats (no dynamic content). At first glance, it seems like having a static site has more in common with having a Geocities site in the 90s than having a modern website.

But Javascript has come a long way since then, and comments (and other systems) can now work via services like [Disqus][] which use Javascript, thus allowing dynamic content on a static site.

With that in mind, I'm going to convert this website to a [JBake][] site (JBake is a Java-based static site generator) hosted on GitHub (for free--thank you GitHub!) The WiP site can be found [here][], the generated code for which can be found [here][here 1]. Finally, the JBake code can be found [here][here 2].

I hope to document this process as it comes along. So far, I've got JBake building using Markdown and Thymeleaf on Gradle using [this guy's][this guy_s] tutorial and plugins. That post's a little out of date, so if you want to follow in my footsteps you may want to look through the [JBake code's Gradle files][here 2]. I've licensed all the code under the GPLv2.

My next step's going to be to export all my posts, images, tags, etc. from Wordpress.com then convert all that into JBake content in Markdown. I hope to create a JBake or Gradle plugin for this process, so other people can as well.


[Disqus]: https://disqus.com/
[JBake]: http://jbake.org
[here]: http://azuaron.github.io/
[here 1]: https://github.com/Azuaron/azuaron.github.io
[here 2]: https://github.com/Azuaron/forest-azuaron-jbake
[this guy_s]: http://melix.github.io/blog/2014/02/hosting-jbake-github.html
