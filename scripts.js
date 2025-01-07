const content = document.getElementById('content');

            function handleButtonClick(button, section) {
              
            document.querySelectorAll('.nav-buttons button').forEach(btn => {
            btn.classList.remove('pressed');
            });

            button.classList.add('pressed');

            content.classList.add('fade-outSections')
            
            setTimeout(() => {
              showContent(section), document.getElementById('content').scrollTop = 0;
            }, 500);

            localStorage.setItem('lastSection', section);
        }

            function resetPage() {
            history.pushState({}, '', '/en');
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('mainMenu').style.display = 'block';
           
            const defaultContent = 
                `Are you having a nice day? Welcome to the website of my most anticipated game KORI!
                Take a look at what's offered on the website and don't forget to have fun reading!
                <video width="45%" controls class="content-video">
                <source src="documents/koriOST.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>`
                ;
            document.getElementById('content').innerHTML = defaultContent;

            document.querySelectorAll('.nav-buttons button').forEach(btn => {
            btn.classList.remove('pressed');
            });

            window.scrollTo(0, 0);   
        }

            function loadSection(section) {
            showContent(section);
        }

        function showContent(section) {

          const sections = {
            about: `
              <h1>About KORI</h1>
              <p>Explore and live the joyful life of Kori with his friends. Go on crazy adventures that you will hopefully never forget!<br>
                <br>
              KORI is an Indie RPG production game imagined and created by Yahbl. It is still in production (since 2024) and will most likely take years before release so buckle up!<br>
              <br>
              <img src="documents/WhisperAbout.png" alt="LOVE AND SUPPORT!" style="width: 100%; max-width: 300px; position: ( 50%, 50%) ;"> <br> Work in progress...</p>
            `,
             
            gallery: `
              <h1>Gallery</h1>
              <p>I made some art concepts and sprites for now and will keep uploading new sprites and update older ones!<br>
              <br> <img src="documents/koriSketch.png" alt="Kori's first sketch" style="width: 100px, max-width: 100px; Height: 200px;"> <br>
              I've tried imagining what the main character of my story would look like. He had to show his personality through the design and I think it worked pretty well. This isn't my first design, but it's the last one and I'm happy with the final result. He looks like a depressed guy who stays by himself. I was inspired by Inio Asano's work and from his character's deep story writing. And yeah, his name, Kori, comes from the word koritsu in Japanese which means isolation or being alone and friendless. That took a dark turn...<br>

              <br> <img src="documents/WebConcept.png" alt="Webpage Concept Art!" style="width: 50%; max-width: 200px;"> <br><br>
              I don't know if you'll understand this little sketch I drew, but I do! This is how I thought the website was going to look like and I think I did a pretty good job at recreating that as a beginner in coding. I had a lot in mind and even wanted to add a demo of the game which I didn't think would take that long to make. (It was so difficult I actually scrapped the idea). Adding a way for visitors to play the game was something I really underestimated but it's still in my bucket list and who knows...maybe one day I'll update the website and you'll find a well made demo!<br>

              <br> <img src="documents/whisperConcept.jpg" alt="Whisper Concept Art!" style="width: 50%; max-width: 200px;"> <br><br>
              Whisper was the first secondary character I imagined. He's the smart and shy guy who only gets along with his 3 close friends (Kori, Rebel and Rex). I knew exactly how he would act as a character so I drew him to reflect his persona. As for his name, well...it speaks for itself!<br>
              
              <br> <img src="documents/rebelConcept.jpg" alt="Rebel Concept Art!" style="width: 50%; max-width: 200px;"> <br><br>
              Just like her name, she's the rebel of the group. Breaking rules and doing what she wants, Rebel is not to be played with and has made quite a name for herself. But, behind her rude and scary persona, she's actually suffering lots of personal problems and is a soft person who cares a lot about her friends.<br>

              <br> <img src="documents/rexSprite.png" alt="Rex Sprite!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              I didn't do any concept art for this character and didn't really know what to do. I knew I wanted 4 characters for the main cast and just made a design on the spot. I think the final design looks good and he seems like the cool guy which is the effect I wanted him to give off. <br>

              <br> <img src="documents/koriSprite.png" alt="Kori Sprite!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              I tried my best recreating his outfit and his overall feel with pixels. It's my first time doing pixel art and sprites. I messed up countless times and had to remake lots of things. I also had to think outside the box and make precise details like the way his hair faces. Even if this seems simple, it was a real pain during the making process. <br>

              <br> <img src="documents/whisperSprite.png" alt="Whisper Sprite!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              The most difficult thing about this pixel design was definitely the hair. I didn't want it to look like a huge ball of hair on his head and I don't really think his design is that great. I can do better and I'll maybe try to upgrade his design so he can be as perfect as I want him to be. <br>

              <br> <img src="documents/rebelSprite.png" alt="Rebel Sprite!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              At this point, I realized that hair was really the most difficult thing to draw. Especially when the drawings are that small. I tried my best here and even if it doesn't quite look like the original concept art, I'm happy with how it turned out. I don't think she looks that rebellious and I'll try to change that view by making different animations and making her script in the story stand out. <br>

              <br> <img src="documents/SpriteAnimation.gif" alt="Friends on an adventure!" style="width: 50%; max-width: 200px; width: 65px; height: 275px;"> <br><br>
              Here's the result of every character's sprite animated. It doesn't show every angle but you can imagine it by yourself...or wait for the game's release! Anyways, I kind of like how this turned out considering it was my first time making pixel character animations. Where do you think they're headed for? <br>

              <br> <img src="documents/houseSprite.png" alt="Home, sweet home!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              I started making the background elements of the game and of course made houses. The houses are themed off the characters that live in them so Kori's house is brown, Rex's house is green, Rebel's house is purple~ish and Whisper's house is gray! Original... right? <br>

              <br> <img src="documents/koriAnimation2.gif" alt="Kori Animation Sheet" style="width: 50%; max-width: 200px; background-color: white;"> <br>
              These drawings are based off my first sketch and I retraced it 3 times in order to make this silly animation. It wasn't that difficult, but definitely time consuming. I actually failed the first few times because the animation was too dark but I managed to fix it, and here is the final result (which is in the bottom right of your screen too right now)!
              <br><br> </p>
            `,

            QnA:` 
              <h1>QnA</h1>
              <ul><br>
                <li><strong>Q:</strong> What is KORI?<br><strong>A:</strong> One of the many projects I had in mind. The vision is clear for now and might come true!</li><br><br>
                <li><strong>Q:</strong> Is it original work?<br><strong>A:</strong> I was heavily inspired by games I loved playing like Omori by OMOCAT, Undertale by TOBY FOX and Earthbound by Shigesato Itoi. However, I tried my best to put my own touch of creativity in the game!</li><br><br>
                <li><strong>Q:</strong> When will the game release?<br><strong>A:</strong> The game development just started! I have the idea in mind and the story and characters are written. Knowing I'm not an expert at coding yet and that I'm working alone on this project, it will take some years for me to finish everything. At the beginning I was planning for the gameplay to last for at least 30 hours, but I'd rather it be short and really good than long and bad so I'll see what I'll do when I start coding the game events.</li><br><br>
                These are basic questions that I thought you guys would ask, if you have any other questions feel free to ask them at korigameproduction@gmail.com and I'll add them here with your response!
              </ul>
            `,

            future: `
              <h1>Future Content</h1>
              <p><br>This website is pretty much finished except for some future patches and updates, you guys now know a lot about my KORI project. The biggest content I might add will be the demo, but I'll have to learn a little more web development to be able to make it happen. The game will take years for it to be perfect and I'll only release it if I'm proud of the final result. I loved making this project and I'm more than happy to do more. I learned lots of new things and I'm sure I'll keep learning new and interesting stuff. I'm looking forward to it and I hope you are too. <br><br><br><br><br><br><br><br><br><br><br><br><br>Thank you so much for the support!</p>
            `
              
          };
            
            content.innerHTML = sections[section] || 'Content not available.';

            content.classList.remove('fade-outSections');
            content.classList.add('fade-inSections');
              
        }