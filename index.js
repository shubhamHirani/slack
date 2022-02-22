const express=  require('express')
const axios = require('axios')
const port = process.env.PORT || 3000


// const { createMessageAdapter } = require('@slack/interactive-messages');
// const slackSigningSecret = '5aad2353d510ff4a1b1ed1b506496346';
// const slackInteractions = createMessageAdapter(slackSigningSecret);
			

const app = express()
const payload = {
    "blocks": [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": "This is a header block",
                "emoji": true
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "`WhatsApp (6 bots, 1000 conversations)`"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Show More"
                },
                "style": "primary",
                "value": "true",
                "action_id": "button-action_1"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ">Testing: 13253077759  -> 3\n>Account: 14155238886  -> 2\n>Account: 917834811114  -> 2\n>Whatsapp Account: 14155238886  -> 1\n>Account: 13253077759  -> 1"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "`Facebook (14 bots, 1200 conversation)`"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Show More"
                },
                "style": "primary",
                "value": "true",
                "action_id": "button-action_2"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ">Account: Dev - 2772 FB bot  -> 2\n>Account: Feb 01 WotNot Prod  -> 2"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "`Web (18 bots, 1500 conversation)`"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Show More"
                },
                "style": "primary",
                "value": "true",
                "action_id": "button-action_3"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ">Bot_Automation: goofy-curran-220f6e.netlify.app  -> 42 \n> بانساري جان बंसरी بانساري جان \n>बंसरी : 405-account.netlify.app  -> 12 \n>Demo Account: test-trigger-api.netlify.app  -> 11\n>Can Divit: 402-dreamy-can-divit.netlify.app  -> 9\n>Tara: 202-contact-load.netlify.app  -> 6\n>Account: sharp-bohr-fe9830.netlify.app  -> 4\n>Salim-Test: check-hello.netlify.app  -> 3\n"
            }
        },
        {
            "type": "divider"
        }
    ]
}
app.use(express.json())
// app.get('/send', async(req,res)=>{
//     const name = 'shubham'
//     const age = 35
//     const result = await axios.post('https://hooks.slack.com/services/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',payload)
// })
app.get('/', (req,res)=>{
    res.send('hiii')
})


app.listen(port, async()=>{
    // const server = await slackInteractions.start(3001);
    console.log('this port is running on ',port);
})

// C033Q5PVDC3

// {
//     "ok": true,
//     "messages": [
//         {
//             "type": "message",
//             "subtype": "bot_add",
//             "text": "added an integration to this channel: <https://wotnotdev.slack.com/services/B0342R0F1UZ|sgvrhb>",
//             "user": "U02SDKQGHJR",
//             "bot_id": "B0342R0F1UZ",
//             "bot_link": "<https://wotnotdev.slack.com/services/B0342R0F1UZ|sgvrhb>",
//             "ts": "1645178955.452089"
//         },
//         {
//             "type": "message",
//             "subtype": "channel_join",
//             "ts": "1645178364.118109",
//             "user": "U02SGK29XJP",
//             "text": "<@U02SGK29XJP> has joined the channel",
//             "inviter": "U02SDKQGHJR"
//         },
//         {
//             "type": "message",
//             "subtype": "channel_join",
//             "ts": "1645178364.051349",
//             "user": "U02SGHW3K2N",
//             "text": "<@U02SGHW3K2N> has joined the channel",
//             "inviter": "U02SDKQGHJR"
//         },
//         {
//             "type": "message",
//             "subtype": "channel_join",
//             "ts": "1645178352.971539",
//             "user": "U02SDKQGHJR",
//             "text": "<@U02SDKQGHJR> has joined the channel"
//         }
//     ],
//     "has_more": false,
//     "is_limited": false,
//     "pin_count": 0,
//     "channel_actions_ts": null,
//     "channel_actions_count": 0
// }