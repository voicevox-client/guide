Here's a simple example of using the TypeScript version of voicevox-client. This will synthesize a phrase (in this case "こんにちは"), with speaker 1 (四国めたん ノーマル) and writes the output to an audio file ("voice.wav")

You can also change the port that VOICEVOX is running on (the default is 50021 so dont change it if you dont know what ur doing)

**Keep in mind that you will need to install and start the VOICEVOX engine seperately.**

```ts
import Client from "voicevox-client"; //import the module

const client = new Client("http://127.0.0.1:50021"); //Start a client that sends requests to 50021 (default port for VOICEVOX running locally)

async function main() { //These two lines create the query and send the request for it to be synthesized
  const audioquery = await client.createAudioQuery("こんにちは", 1); 
  const audioquery.synthesis(1);
}
```