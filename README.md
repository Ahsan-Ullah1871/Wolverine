[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
  


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/TRADLY-PLATFORM/Wolverine">
    <img src="./src/assets/images/logo.svg" alt="Logo" width="80" height="80">
  </a>
 
  <h3 align="center">Tradly Platform</h3>

  <p align="center">
     An open source React Native Template. Built on top of Tradly Headless API
    <br />
    <a href="https://portal.tradly.app/docs/introduction"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://portal.tradly.app/react-native">View Demo</a>
    ·
    <a href="https://github.com/TRADLY-PLATFORM/Wolverine/issues">Report Bug</a>
    ·
    <a href="https://github.com/TRADLY-PLATFORM/Wolverine/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This React Native template provides a full fledged event marketplace app. With a few smaller customisation on strings used in the app, it can be personalised for other marketplace types as well. Progressively we will be adding the mobile app configs that will help you to customise things from [Tradly SuperAdmin](https://auth.sandbox.tradly.app/register)
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
 

### Built With

* [React](https://github.com/facebook/react-native)
* [Bootstrap3](https://getbootstrap.com/)
 



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

### iOS
In the root directory
* Install dependencies: `npm install`

In the `ios` directory

* Install Pods: `gem install cocoapods`
* Install Pods: `pod install`


### Android

* You might need to do this to run it in Android Studio or on real device: `adb reverse tcp:8081 tcp:8081`
* And for the sample server: `adb reverse tcp:3000 tcp:3000`
* To run from command line try: `react-native run-android`

### Server

There is a server that the app hits for data. The data is only stored in memory, but it should produce a more realistic environment.

In the `server` directory

* Install nvm and node-4.2.3
* Install dependencies: `npm install`
* Run it: `npm start`

It has sample data in the `models.js` file. For example, there is a user bleonard (password: "sample") that you can log in as.


### Compiling

You can compile and put it on the phone with: `npm run install:staging`

Not that there's a staging server at this point, but it's an example of how to compile things via the command line.

### Android

We'll get there, but we're still working on the iOS version.



<!-- USAGE EXAMPLES -->
## Usage
* You might need to change the below URL as per your app setup. Adding keys of your sentry, stripe, firebase, etc. You can read more about how we have used 3rd partys [from integration documentation](https://portal.tradly.app/docs/firebase)

```tsx
// AppConstant.js
    {
      appSharePath: 'abc://',
      stripePublishKey: 'abc',
      dsnSentry: 'https://abc.ingest.sentry.io/5896058',
      firebaseChatPath: '/abc_dev/',
    }
```


# Current Concepts

#### Environment

There is a model called Environment that gets bootstrapped from Objective-C. It knows things that are different per environment like what API server to talk to.

#### Data storage

Info is currently stored as json to the local file system.

#### Shared CSS

It uses the `cssVar` pattern from the sample Facebook apps.

#### API

It uses superagent to do HTTP requests and sets headers and other things like that.

#### Components

Some shared components that might be helpful

* SegmentedControl: Non-iOS specific version of that control
* SimpleList: make a list out of the props set
* Button: Helper to make them all similiar

## Have a question
- create an issue
- join our developer [community](https://community.tradly.app)
- Tradly Platform   -  hitradly@gmail.com


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements

* []()
* []()
* []()
 -->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TRADLY-PLATFORM/Wolverine 
[contributors-url]: https://github.com/TRADLY-PLATFORM/Wolverine/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TRADLY-PLATFORM/Wolverinee
[forks-url]: https://github.com/TRADLY-PLATFORM/Wolverine/network/members
[stars-shield]: https://img.shields.io/github/stars/TRADLY-PLATFORM/Wolverine
[stars-url]: https://github.com/TRADLY-PLATFORM/Wolverine/stargazers
[issues-shield]: https://img.shields.io/github/issues/TRADLY-PLATFORM/Wolverine
[issues-url]: https://github.com/TRADLY-PLATFORM/Wolverine/issues
[license-shield]: https://img.shields.io/github/license/TRADLY-PLATFORM/repo.svg?style=for-the-badge
[license-url]: https://github.com/TRADLY-PLATFORM/Wolverine/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username


-------------------- 




