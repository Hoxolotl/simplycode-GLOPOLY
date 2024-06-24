# SimplyPresent

A [Solid](https://solidproject.org/) presentation tool.

SimplyPresent allows you to make a browser-based presentation and store it in a [Solid datapod](https://solidproject.org/users/get-a-pod). You can copy the dist/index.html file in its own folder in a solid data pod. If you then open that URL in your browser, you will see this screen:

![image](https://github.com/SimplyEdit/SimplyPresent/assets/1006453/961dc5b2-e587-4d2e-a441-c3f44ba3e00e)

Click on the SimplyPresent button in the bottom right and select 'Edit'. Then you can add slides to your presentation. Press save to save the changes.

## Starting a presentation

If you press the SimplyPresent button in the bottom right and select 'present', you start the presentation mode. This shows the view for you, as presenter.
To show a full screen presentation on a different screen, press the 'start sharing' button. Then copy the share link to a new window. This window will follow the presenter window. You can use this URL in another browser or another computer as well.

![image](https://github.com/SimplyEdit/SimplyPresent/assets/1006453/f2e82818-4766-4ba1-9f5d-34c2829c4b5e)

## Customizing SimplyPresent

SimplyPresent is made to be customized. The default slides have a logo image, which you can upload with the image browse button. Insert or select an image, then press browse. Now upload an SVG image call 'logo-white.svg' in the root.

You can also change the colors and fonts, by setting a few CSS variables. These are the default settings:

```css
:root {
    --highlight-dark: #009c55;
    --highlight-light: #00d455;
    --highlight-color: #fff;
    --highlight-background: linear-gradient( to bottom, var(--highlight-light), var(--highlight-dark) );

    --support-dark: #2ba3b0;
    --support-light: #4fb7c2;
    --support-color: #fff;
    --support-background: linear-gradient( to bottom, var(--support-light), var(--support-dark) );

    --grey-dark: #38393c;
    --grey-medium: #7f8185;
    --grey-light: #e9ebec;
    --grey-dark: #38393c;
    --black: #000;
    --white: #fff;
    --grey-background: var(--grey-dark);

    --font-family: 'Alegreya Sans', sans-serif;
    --font-size: 20px;
    --line-height: 1.5em;
    --color: #7f8185;
    --background: #fff;
}
```

SimplyPresent defines 6 slide templates, based on 4 square grid. The easiest way to change these, or add your own slides, is to open SimplyPresent in the SimplyCode editor. To do that follow the steps in the [SimplyCode tutorial](https://tutorial.dev.muze.nl/), under 'Introducing SimplyPresent'.

## Funding

This project is funded through the [NGI Assure Fund](https://nlnet.nl/assure/), a fund
established by [NLnet](https://nlnet.nl) with financial support from the European Commission's
[Next Generation Internet](https://ngi.eu) program. Learn more on the [NLnet project page](https://nlnet.nl/project/SES/).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLNet foundation logo" width="300" />](https://nlnet.nl/)
[<img src="https://nlnet.nl/image/logos/NGIAssure_tag.svg" alt="NGI Assure Logo" width="300" />](https://nlnet.nl/assure/)
