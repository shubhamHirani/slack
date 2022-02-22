const { App } = require('@slack/bolt');
const { WebClient} = require('@slack/web-api')
const {createEventAdapter} = require('@slack/events-api')

const port = 3000
const app = new App({
  signingSecret: '5aad2353d510ff4a1b1ed1b506496346',
  token:'xoxb-808986357047-3122336369620-8VuhHKNSklAFubDH28VgMXuc',
});

const slackEvents = createEventAdapter('5aad2353d510ff4a1b1ed1b506496346')
const slackClient  = new WebClient('xoxb-808986357047-3122336369620-8VuhHKNSklAFubDH28VgMXuc')

slackEvents.on('app_mention',(event)=>{
    console.log(`got message from ${event.user} : ${event.text}`)
    (async()=>{
        try{
            await slackClient.chat.postMessage({channel : event.channel, text:`hello <@${event.user}>!!`})
        }catch(e){
            console.log(e.data);
        }
    })()
})
slackEvents.on('error', console.error)

slackEvents.start(port).then(()=>{
    console.log(`server started on ${port}`);
})
/* Add functionality here */
// app.message('knock knock', async ({ message, say }) => {
//     await say(`_Who's there?_`);
//   });

// (async () => {
//   // Start the app
//   await app.start(process.env.PORT || 3000);

//   console.log('Bolt app is running!');
// })();



// curl -X POST -H 'Content-type: application/json' --data '{
const options = {	"blocks": [
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

// }' https://hooks.slack.com/services/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
