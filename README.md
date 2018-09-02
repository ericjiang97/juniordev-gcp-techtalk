# Building Building Scalable NodeJS Apps on Google's Scalable Infrastructure
_Presented as part of JuniorDev September 2018 Code & Tell_
---

<a href="http://juniordev.io">
<img src="https://i.imgur.com/qQMdvEw.png" height="150px"/>
</a>

<a href="https://monplan.github.io">
<img src="https://avatars2.githubusercontent.com/u/22784829?&v=4" height="150px"/>
</a>

## Presenting

To Build the Presentation use [Deckset](https://www.deckset.com/) and open [presentation.md](presentation.md)
Otherwise view [presentation.pdf](presentation.pdf).

## Quick Links

<a href="https://cloud.google.com">
<img src="https://betanews.com/wp-content/uploads/2018/06/google-cloud-logo.jpg" height="150px">
</a>

## Demo Application (Local Build)
You can build and run the demo application, its just a Express App.

### Prequisites
- NodeJS 8 or greater
- A Good Internet Connection

### Developing Locally
1. Go to `/server`
2. Run `npm install` or `yarn` to install node  

## Demo Application (GCP Deployment)
### Deploying to Google App Engine (Google Cloud Platform)
- A Google Account
- A GCP Account (Google Account)
   - You might want billing enabled (non-free tier), you can get $300 credit if you sign up.
- GCloud SDK

### Instructions
1. Create a new GCP Project and follow on-screen instructions 
    - Created a unique projectID (i.e. `my-project-id`)
2. Go into `/server` and run `gcloud app deploy`
   - if this is your first deployment to GCP you will need to login, follow prompts in the CLI terminal
   - If this is your first deployment to Google App Engine, select region, I recommend using `australia-southeast1` as we are in Australia 🇦🇺
3. Go to the app and test online 
   - Go to `my-project-id.appspot.com`
   - Or just type `gcloud app browse`

To reconfigure which `app` is your current working project, type `gcloud config set project=my-project-id`, replacing my-project-id with the relevant project.

# LICENSE
This presentation and demo application is licensed under the `MIT` Open Source License. To view LICENSE visit [here](./LICENSE)

Copyright 2017 - 2018 &copy; Eric Jiang <br/>
Copyright 2018 &copy; Monash University







