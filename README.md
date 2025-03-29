![starspceafiş](https://github.com/user-attachments/assets/b70a5f9e-ce55-4fe5-8915-9a83e0c6b188)
![852528](https://github.com/user-attachments/assets/b85b2433-3ad7-4326-abbc-b1c33e475524)
![3d logo](https://github.com/user-attachments/assets/fb741758-01c8-4cc6-b6b4-3eb166c0a319)


<img class="giphy-gif-img giphy-img-loaded" src="https://media4.giphy.com/media/ac003BfmW4ts42KzVg/giphy.gif?cid=ecf05e47gt8w5auc8v9u5tdemyl0kfg284sdbten1t82s9w0&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" width="100%" height="100%" alt="dotfilmsco dot dotfilms dot wordmark GIF" style="background: unset;">


***[`(*```STAR``My```Tech`````*****````*****```*****`
***``é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é```***`***]***


***[***``(*```STAR``My```Tech`***
***`é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é``***]***


# Create a JavaScript Action

<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img src="https://github.com/user-attachments/assets/b675b2c3-b678-4988-9d99-90b0aa250836"></a>
 </p>

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

### [Star Computer Com.tr](https://starcomputer.com.tr)
<iframe src="https://starcomputer.com.tr" title="Planet" height="400" width="1000" style="border:10;"></iframe>
<iframe src="https://starteknoloji.github.io/ThemeBlue/" title="Planet" height="400" width="1000" style="border:10;"></iframe>
<div class="badge-base LI-profile-badge" data-locale="tr_TR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="star-computer-96573a2a0" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://tr.linkedin.com/in/star-computer-96573a2a0?trk=profile-badge">Star Computer</a></div>

### [My Computer Digital](https://mycomputer.digital.com.tr)
<iframe src="https://mycomputer.digital" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Satilik Shop](https://satilik.shop) 
<iframe src="https://satilik.shop" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Starnet Shop Test](https://starteknoloji.github.io/Starnet/shop)
<iframe src="https://starteknoloji.github.io/Starnet/shop" title="Planet" height="400" width="1000" style="border:10;"></iframe>


[![OIP](https://github.com/user-attachments/assets/5bb2f24b-c878-4e1e-848d-15aec1af2ea8)](https://starteknoloji.github.io/Starnet/)

<iframe src="https://github.com/sponsors/StarTeknoloji/card" title="Sponsor StarTeknoloji" height="200" width="1000" style="border: 10;"></iframe>
<iframe src="https://github.com/sponsors/Codes-Exe/card" title="Sponsor Codes-Exe" height="200" width="1000" style="border: 10;"></iframe>

              
`Author`
`Erçetin Güler`

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! 🚀

<div style="text-align:center;padding:1em 0;"> <h2><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/en/city/738154"><span style="color:gray;">Current local time in</span><br />Vize, Turkey</a></h2> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Europe%2FIstanbul" width="140%" height="120" frameborder="50" seamless></iframe> </div>

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
        style="display:block;font-size:12px;font-weight:1000;font-family:Helvetica Neue, arial, sans-serif;text-align:center;line-height:1.1;padding:12px 16px;border-radius:4px;background:rgba(29,47,58,0.6);color:rgb(255,255,255)"
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
