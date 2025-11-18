import type { Site, SocialObjects, Clients } from './types'
import aws from './images/logos/aws.png'
import azure from './images/logos/azure.png'
import flespi from './images/logos/flespi.png'
import github from './images/logos/github.png'
import google from './images/logos/google.png'
import lalamove from './images/logos/lalamove.png'
import osrm from './images/logos/osrm.png'
import stripe from './images/logos/stripe.png'
import twilio from './images/logos/twilio.png'
import valhalla from './images/logos/valhalla.png'
import vroom from './images/logos/vroom.png'
import sentry from './images/logos/sentry.png'
import sendgrid from './images/logos/sendgrid.png'
import mailgun from './images/logos/mailgun.png'
import ember from './images/logos/ember.png'

export const SITE: Site = {
  website: 'https://fleetbase.io',
  author: 'Fleetbase Pte Ltd',
  description:
    "Open Source Modular Logistics OS",
  title: 'Fleetbase',
  ogImage: 'fleetbase_icon.png',
}

export const SOCIALS: SocialObjects = [
  {
    name: 'twitter',
    href: 'https://twitter.com/fleetbase_io?lang=en',
    label: '',
    ariaLabel: '',
  },
  {
    name: 'github',
    href: 'https://github.com/fleetbase/fleetbase',
    label: '',
    ariaLabel: '',
  },
  {
    name: 'youtube',
    href: 'https://www.youtube.com/@fleetbase',
    label: '',
    ariaLabel: '',
  },
  {
    name: 'discord',
    href: 'https://discord.gg/HnTqQ6zAVn',
    label: '',
    ariaLabel: '',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/fleetbase/',
    label: '',
    ariaLabel: '',
  },
]

export const CLIENTS: Clients = [
  { name: 'Amazon Web Services', logo: aws, width: 75 },
  { name: 'Microsoft Azure', logo: azure, width: 140 },
  { name: 'Ember.js', logo: ember, width: 100 },
  { name: 'Flespi', logo: flespi, width: 100 },
  { name: 'Github', logo: github, width: 100 },
  { name: 'Google Cloud', logo: google, width: 150 },
  { name: 'Lalamove', logo: lalamove, width: 130 },
  { name: 'OSRM', logo: osrm, width: 100 },
  { name: 'Stripe', logo: stripe, width: 80 },
  { name: 'Twilio', logo: twilio, width: 100 },
  { name: 'Valhalla', logo: valhalla, width: 70 },
  { name: 'VROOM', logo: vroom, width: 130 },
  { name: 'Sendgrid', logo: sendgrid, width: 130 },
  { name: 'Sentry', logo: sentry, width: 130 },
  { name: 'Mailgun', logo: mailgun, width: 100 },
]
