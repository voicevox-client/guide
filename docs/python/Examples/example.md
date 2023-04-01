## Example
Here's a simple example of using the Python version of voicevox-client. This will synthesize a phrase (in this case "こんにちは"), with speaker 1 (四国めたん ノーマル) and writes the output to an audio file ("voice.wav")<br>
**Keep in mind that you will need to install and start the VOICEVOX engine seperately.**

```python
from voicevox import Client #import voicevox-client
import asyncio #import asyncio


async def main():
    async with Client() as client:
        audio_query = await client.create_audio_query(
            "こんにちは！", speaker=1 #synthesize the audio
        )
        with open("voice.wav", "wb") as f: #open the file "voice.wav"
            f.write(await audio_query.synthesis(speaker=1)) #write the synthesized audio to the file


if __name__ == "__main__":
    asyncio.run(main())
```