
<p align="center" dir="auto">
  <a href="https://starcomputer.shop"><img src="https://github.com/user-attachments/assets/ae8d1e1c-5a86-43bb-9c8f-4d41e289a22d" secured-asset-link="" style="max-width: 100%;"></a>
 </p>

![starspceafiş](https://github.com/user-attachments/assets/e2c5377e-8d8b-42c0-a3af-a436e74472dd)


![computer network and peripherals star technology logo colorful world with broken meteor rocks and planets in the middle of the colorful star inside the world (22)](https://github.com/user-attachments/assets/3d278891-70da-4818-ae3f-82c632fa8d32)


![a computer network and peripherals with a colorful world with a colorful triangle in the middle of the broken meteor rocks and planets, the star technology logo, people watching from the world in space seeing  (11)](https://github.com/user-attachments/assets/3ea6fdbd-706c-44a4-b71b-ccccf19a4126)

[![gezegenler  ile  kodlardan ve dijital   bilgisayar iconlarından  ortasında renkli yüce üçgenlerden oluşan  yıldız renkli ışınlanmış gökkuşağı birlikte bilgisayar ağı olan gelişmiş  yazılım ile dünyadan uz (20)](https://github.com/user-attachments/assets/4b07ceb0-bd4e-4127-8ce5-1b2097f6ec98)](https:/*/starcomputer.tr)


***[`(*```STAR``My```Tech`````*****````*****```*****`
***``é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é```***`***]***


***[***``(*```STAR``My```Tech`***
***`é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é``***]***


<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGlnz87ebc/qX_nlL760ZEAoqGl4dFrng/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGlnz87ebc&#x2F;qX_nlL760ZEAoqGl4dFrng&#x2F;view?utm_content=DAGlnz87ebc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Colorful Star Computer Logo Design</a> - Star Teknoloji
[![pages-build-deployment](https://github.com/Codes-Exe/JavaScript/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/Codes-Exe/JavaScript/actions/workflows/pages/pages-build-deployment)

<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGlLmFAypc/dpH5RYWuqOCKyD40xWgVUg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGlLmFAypc&#x2F;dpH5RYWuqOCKyD40xWgVUg&#x2F;view?utm_content=DAGlLmFAypc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Siyah Beyaz Koyu Fütüristik Stilde Çok Yakında Web Sitesi Çok Yakında Web Sitesi Çok Yakında Sayfası</a> - Star Computer

# Create a JavaScript Action

Use this template to bootstrap the creation of a JavaScript action.:rocket:

This template includes tests, linting, a validation workflow, publishing, and versioning guidance.

If you are new, there's also a simpler introduction.  See the [Hello World JavaScript Action](https://github.com/actions/hello-world-javascript-action)

## Create an action from this template

Click the `Use this Template` and provide the new repo details for your action

## Code in Main

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)
...
```

## Change action.yml

The action.yml defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

```javascript
const core = require('@actions/core');
...

async function run() {
  try {
      ...
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```
## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! 🧑‍💻:


## Study and Discussion

<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>

## Websites of our businesses used

Sitelerimizdeki uygulamalar ev ve işyerleri için özelleştirebilir, geliştirilebiliriz. Yorum, istek ve sorularınız için lütfen yazınız. 
NOT; Projelrimizi hazırlamamızda Lütfen katkıda bulunun.

[<img style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://github.com/user-attachments/assets/7c8dc3e1-e2bd-4cfa-bae7-6ff304e09656" width="532" height="266">](https://starcomputer.space)

### [Star Computer Com.tr](https://starcomputer.com.tr)
<iframe src="https://starcomputer.com.tr" title="Planet" height="400" width="1000" style="border:10;"></iframe>
<iframe src="https://starteknoloji.github.io/ThemeBlue/" title="Planet" height="400" width="1000" style="border:10;"></iframe>
<div class="badge-base LI-profile-badge" data-locale="tr_TR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="star-computer-96573a2a0" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://tr.linkedin.com/in/star-computer-96573a2a0?trk=profile-badge">Star Computer</a></div>



<script 
  src="https://www.paypal.com/sdk/js?client-id=BAAZLPCKnSb06zNs1aBikWVXyJHPiVZvA3ZLvqPo1rNpf92PSLL91IOPWDdhXBQNVW275Q8xspd4OB7Y-I&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>

<div id="paypal-container-X2N7ME57HB89S"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "X2N7ME57HB89S",
  }).render("#paypal-container-X2N7ME57HB89S")
</script>

<script 
  src="https://www.paypal.com/sdk/js?client-id=BAASlR7ZOaZ3ZUlPcIpMBaMKS-8NYGnU0GDawmguI1KZAFbZszey9baVVAXKxR1cz4RWE6bnIcX-7Z_VLk&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>

<div id="paypal-container-BGWQVG5XXGACJ"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "BGWQVG5XXGACJ",
  }).render("#paypal-container-BGWQVG5XXGACJ")
</script>

<script 
  src="https://www.paypal.com/sdk/js?client-id=BAAZLPCKnSb06zNs1aBikWVXyJHPiVZvA3ZLvqPo1rNpf92PSLL91IOPWDdhXBQNVW275Q8xspd4OB7Y-I&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>

<div id="paypal-container-ZHEH5QJBCN7A4"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "ZHEH5QJBCN7A4",
  }).render("#paypal-container-ZHEH5QJBCN7A4")
</script>

### [My Computer Digital](https://mycomputer.digital)
<iframe src="https://https://starcomputer.my.canva.site/" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Proje YerliCins](https://yerlicins.com) 
<iframe src="https://yerlicins.com" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Starnet banner, StarComputerSpace Test](https://starcomputer.space)
<iframe src="https://starcomputer.space" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [ÖrnekSite](https://starspace.powerappsportals.com/)
<iframe src="https://starspace.powerappsportals.com" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Proje  Azure Cornergrab](htpps://cornergrab.com)
<iframe src="https://cornergrab.com" title="Planet" height="400" width="1000" style="border:10;"></iframe>



<iframe src="https://github.com/sponsors/StarTeknoloji/card" title="Sponsor StarTeknoloji" height="200" width="1000" style="border: 10;"></iframe>
<iframe src="https://github.com/sponsors/Codes-Exe/card" title="Sponsor Codes-Exe" height="200" width="1000" style="border: 10;"></iframe>

              
`Author`
`Erçetin Güler`

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! 🚀


<div style="text-align:center;padding:1em 0;"> <h2><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/en/city/738154"><span style="color:gray;">Current local time in</span><br />Vize, Turkey</a></h2> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Europe%2FIstanbul" width="145%" height="120" frameborder="50" seamless></iframe> </div>


<script type='text/javascript'>
    var disqus_shortname = 'starteknoloji-space';
    // DON'T EDIT BELOW THIS LINE
    (function () {
        var loaded = false;
        function loadDisqus() {
            if (loaded) return;
            loaded = true;
            var div = document.getElementById('all-comments');
            div.innerHTML = ''; div.id = 'disqus_thread';

            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';

            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

        }

        if ( document.getElementById('all-comments') || document.readyState === "complete" ) {
            return setTimeout( loadDisqus, 1 );
        }

        if ( document.addEventListener ) {
            document.addEventListener( "DOMContentLoaded", loadDisqus, false );
            window.addEventListener( "load", loadDisqus, false );
        } else if ( document.attachEvent ) {
            document.attachEvent( "onreadystatechange", loadDisqus );
            window.attachEvent( "onload", loadDisqus);
        }
    }());
</script>


<div id="disqus_thread"></div>
<script>
    window.addEventListener('message', receiveMessage, false);
    function receiveMessage(event) {
        if (event.data) {
            var msg;
            try {
                msg = JSON.parse(event.data);
            } catch (err) {
                // Do nothing
            }
            if (!msg) {
                return false;
            }
            if (msg.name === 'resize' || msg.name === 'rendered') {
                window.parent.postMessage({
                sentinel: 'amp',
                type: 'embed-size',
                height: msg.data.height
                }, '*');
            }
        }
    }
</script>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    */
    var disqus_config = function () {
        this.page.url = window.location;
        this.page.identifier = window.location.hash;
    };
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//starteknoloji-space.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
<amp-iframe
    width=1000 height=140
    src="https://example.com/amp#hash"
    layout="responsive"
    sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
    resizable
>
    <div
        aria-label="Load more"
        role=button
        tabindex=0
        overflow
        style="display:block;font-size:12px;font-weight:8000;font-family:Helvetica Neue, arial, sans-serif;text-align:center;line-height:1.1;padding:12px 16px;border-radius:4px;background:rgba(29,47,58,0.6);color:rgb(255,255,255)"
    >
        Load more
    </div>
</amp-iframe>
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>


<html lang="en"><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1"><!-- Begin Jekyll SEO tag v2.8.0 -->
<title>Your awesome title | Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.</title>
<meta name="generator" content="Jekyll v4.4.1" />
<meta property="og:title" content="Your awesome title" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description." />
<meta property="og:description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description." />
<link rel="canonical" href="http://localhost:4000/" />
<meta property="og:url" content="http://localhost:4000/" />
<meta property="og:site_name" content="Your awesome title" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="Your awesome title" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","description":"Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.","headline":"Your awesome title","name":"Your awesome title","url":"http://localhost:4000/"}</script>
<!-- End Jekyll SEO tag -->
<link rel="stylesheet" href="/assets/main.css"><link type="application/atom+xml" rel="alternate" href="http://localhost:4000/feed.xml" title="Your awesome title" /></head>
<body><header class="site-header" role="banner">

  <div class="wrapper"><a class="site-title" rel="author" href="/">Your awesome title</a><nav class="site-nav">
        <input type="checkbox" id="nav-trigger" class="nav-trigger" />
        <label for="nav-trigger">
          <span class="menu-icon">
            <svg viewBox="0 0 18 15" width="18px" height="15px">
              <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
            </svg>
          </span>
        </label>

        <div class="trigger"><a class="page-link" href="/about/">About</a></div>
      </nav></div>
</header>
<main class="page-content" aria-label="Content">
      <div class="wrapper">
        <div class="home">
<h2 class="post-list-heading">Posts</h2>
    <ul class="post-list"><li><span class="post-meta">Apr 10, 2025</span>
        <h3>
          <a class="post-link" href="/jekyll/update/2025/04/10/welcome-to-jekyll.html">
            Welcome to Jekyll!
          </a>
        </h3></li></ul>

    <p class="rss-subscribe">subscribe <a href="/feed.xml">via RSS</a></p></div>

      </div>
    </main><footer class="site-footer h-card">
  <data class="u-url" href="/"></data>

  <div class="wrapper">

    <h2 class="footer-heading">Your awesome title</h2>

    <div class="footer-col-wrapper">
      <div class="footer-col footer-col-1">
        <ul class="contact-list">
          <li class="p-name">Your awesome title</li><li><a class="u-email" href="mailto:your-email@example.com">your-email@example.com</a></li></ul>
      </div>

      <div class="footer-col footer-col-2"><ul class="social-media-list"><li><a href="https://github.com/jekyll"><svg class="svg-icon"><use xlink:href="/assets/minima-social-icons.svg#github"></use></svg> <span class="username">jekyll</span></a></li><li><a href="https://www.twitter.com/jekyllrb"><svg class="svg-icon"><use xlink:href="/assets/minima-social-icons.svg#twitter"></use></svg> <span class="username">jekyllrb</span></a></li></ul>
</div>

      <div class="footer-col footer-col-3">
        <p>Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.</p>
      </div>
    </div>

  </div>

</footer>
</body>

</html>
// Star Teknoloji JS Action Demo
const starAction = async (params) => {
  console.log('Starting action with:', params);
  
  // Validate parameters
  if (!params.task) {
    throw new Error('Task parameter is required');
  }
  
  // Process based on action type
  switch (params.actionType) {
    case 'fetch':
      // Simulate API fetch
      await new Promise(resolve => 
        setTimeout(resolve, 800));
      return {
        success: true,
        message: 'Data fetched successfully!',
        data: { id: 123, name: 'Sample Data' },
        timestamp: new Date().toISOString()
      };
      
    case 'process':
      // Simulate data processing
      await new Promise(resolve => 
        setTimeout(resolve, 1200));
      return {
        success: true,
        message: 'Data processed successfully!',
        processedItems: 42,
        timestamp: new Date().toISOString()
      };
      
    case 'error':
      // Simulate error
      await new Promise(resolve => 
        setTimeout(resolve, 500));
      throw new Error('Simulated error occurred');
      
    default:
      // Default action
      await new Promise(resolve => 
        setTimeout(resolve, 500));
      return {
        success: true,
        message: 'Action completed successfully!',
        timestamp: new Date().toISOString()
      };
  }
};
// Star Teknoloji JS Action
const action = {
  name: 'star-action',
  run: async () => {
    console.log('🚀 Action running!');
    return { success: true };
  }
};

export default action;
