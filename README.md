>![starspceafiş](https://github.com/user-attachments/assets/bcdf0061-1e14-4ef6-a4c4-c5a5787c8d26)

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
NOT; Uygulamamız Konumumuzda geçersizdir.

- [https://www.starcomputer.com.tr](https://starcomputer.com.tr)
- [https://www.mycomputer.digital](https://mycomputer.digital)
- [https://www.satilik.shop](https://satilik.shop)
- [https://www.yerlicins.com](https://yerlicins.com/)
- [https://www.braverclient.com](https://braverclient.com)
- [https://www.cornergrab.com](https://cornergrab.com)

`Author`
`Erçetin Güler`

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! 🚀






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
    width=600 height=140
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
        style="display:block;font-size:12px;font-weight:500;font-family:Helvetica Neue, arial, sans-serif;text-align:center;line-height:1.1;padding:12px 16px;border-radius:4px;background:rgba(29,47,58,0.6);color:rgb(255,255,255)"
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

