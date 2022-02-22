const { App } = require('@slack/bolt');
const axios = require('axios')
const messageFormateFile = require('./options.json')
const channelId = 'C033Q5PVDC3'



const app = new App({
  signingSecret: 'e6eef9f6791b007e6e46ad5351708569',
  token: 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
  appToken: 'xapp-1-A033P0LNKJT-3139634894787-5bd5ec07191bcd19b410fa7e379442668bb0960a653ef4b3ebf2b0ee04dbd6fc',
  socketMode: true
});
app.message('hello', async({client}) => {
    console.log('1');
    const result = await client.chat.postMessage(messageFormateFile)
    console.log("result: ", result);
})

app.action('button-action_3',async ({ ack, message, say, client, payload })=>{
    await ack()
    const msg = await app.client.chat.postMessage({
        channel: channelId,
        token : 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
        text: '`this is whatsapp messages`',
        blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "`whatsapp log` \n>Testing: 13253077759  -> 3\n>Account: 14155238886  -> 2\n>Account: 917834811114  -> 2\n>Whatsapp Account: 14155238886  -> 1\n>Account: 13253077759  -> 1"
			},
            "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Show More"
				},
				"style": "primary",
				"value": "true",
				"action_id": "button-action_4"
			}
		}
	]
    });
});

app.action('button-action_2',async ({ ack, message, say, client, payload })=>{
    await ack()
    const msg = await app.client.chat.postMessage({
        channel: channelId,
        token : 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
        text: '`this is facebook messages`',
        blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "`facebook log `\n>Account: Dev - 2772 FB bot  -> 2\n>Account: Feb 01 WotNot Prod  -> 2"
			},
            "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Show More"
				},
				"style": "primary",
				"value": "true",
				"action_id": "button-action_5"
			}
		}
	]
    });
});

app.action('button-action_1',async ({ ack, message, say, client, payload })=>{
    await ack()
    const msg = await app.client.chat.postMessage({
        channel: channelId,
        token : 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
        text: '`this is web messages`',
        blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "`web logs` \n>Bot_Automation: goofy-curran-220f6e.netlify.app  -> 42 \n> بانساري جان बंसरी بانساري جان \n>बंसरी : 405-account.netlify.app  -> 12 \n>Demo Account: test-trigger-api.netlify.app  -> 11\n>Can Divit: 402-dreamy-can-divit.netlify.app  -> 9\n>Tara: 202-contact-load.netlify.app  -> 6\n>Account: sharp-bohr-fe9830.netlify.app  -> 4\n>Salim-Test: check-hello.netlify.app  -> 3\n"
			},
            "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Show More"
				},
				"style": "primary",
				"value": "true",
				"action_id": "button-action_6"
			}
		},
	]
    });
});

app.action('button-action_4',async ({ ack, message, say, client, payload })=>{
    await ack()
    const msg = await app.client.chat.postMessage({
        channel: channelId,
        token : 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
        text: '`this is whatsapp messages`',
        blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "`whatsapp log` \n>Testing: 13253077759  -> 3\n>Account: 14155238886  -> 2\n>Account: 917834811114  -> 2\n>Whatsapp Account: 14155238886  -> 1\n>Account: 13253077759  -> 1"
			},
            "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Show More"
				},
				"style": "primary",
				"value": "true",
				"action_id": "button-action_4"
			}
		}
	]
    });
});

app.action('button-action_6',async ({ ack, message, say, client, payload })=>{
    await ack()
    const msg = await app.client.chat.postMessage({
        channel: channelId,
        token : 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
        text: '`this is web messages`',
        blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "`web logs` \n>Bot_Automation: goofy-curran-220f6e.netlify.app  -> 42 \n> بانساري جان बंसरी بانساري جان \n>बंसरी : 405-account.netlify.app  -> 12 \n>Demo Account: test-trigger-api.netlify.app  -> 11\n>Can Divit: 402-dreamy-can-divit.netlify.app  -> 9\n>Tara: 202-contact-load.netlify.app  -> 6\n>Account: sharp-bohr-fe9830.netlify.app  -> 4\n>Salim-Test: check-hello.netlify.app  -> 3\n"
			},
            "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Show More"
				},
				"style": "primary",
				"value": "true",
				"action_id": "button-action_6"
			}
		},
	]
    });
});
app.action('button-action_5',async ({ ack, message, say, client, payload })=>{
    await ack()
    const msg = await app.client.chat.postMessage({
        channel: channelId,
        token : 'xoxb-808986357047-3152234823249-1Q1j06EdZBekwlr9zQtVyJXu',
        text: '`this is facebook messages`',
        blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "`facebook log `\n>Account: Dev - 2772 FB bot  -> 2\n>Account: Feb 01 WotNot Prod  -> 2"
			},
            "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Show More"
				},
				"style": "primary",
				"value": "true",
				"action_id": "button-action_5"
			}
		}
	]
    });
});


(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

    axios.post('https://hooks.slack.com/services/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', messageFormateFile)
  console.log('⚡️ Bolt app is running!');
})();