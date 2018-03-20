## Download the demo:

[demo](https://github.com/garajo/reveal.js-xapi-plugin/raw/master/dist/demo.zip)


## Features

- Bring HTML and xAPI capabilities to Instructional/Course Designers
- HTML-based statement builder
- as plugin, leverages established client-side slide navigator, [RevealJS](http://lab.hakim.se/reveal-js/) by [Hakim el Hattab](http://hakim.se), and augments it with support for xapi
- exploration of profile data within client context
- a xAPI statement sender
- consistent Activity IDs, yet override-able, based on slide indexes
- define your Activity name and description
- embed videos, audio, custom components such as quizzes with capability to send statements

## Vantages of HTML Standards for Instructional Design and Ed Tech Development

The variety of content and media that can be embedded into HTML, and defining content behaviour and interactions are endless. Therefore HTML is perhaps the best canvas to build rich, instructional content.

The open standards of HTML, JS, and CSS are strong guarantees to device-content compatibility(?arguable), and consumable by browsers, native applications, and mobile devices.

You can open `revealJS/index.html` in a browser, and send statements.

## <a name="roadmap"></a>Roadmap

- get feedback from users, Instructional/Course Designers
  - what features would be needed for richer use
- get feedback from technical reviewers
  - any incorrect implementations
  - other statement parts that can be included

## Limitations
- default as client side application, it is inherently insecure
- can be used for temporal data gathering from learners, such as MOOCs
- patching with tokens, or other techniques; it can be securely served

## Feedback and Pull Requests welcome

### Need help
- See [RoadMap](#roadmap)
- Models
- Preact/AVA integration
