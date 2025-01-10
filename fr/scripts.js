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
            history.pushState({}, '', '/fr');
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('mainMenu').style.display = 'block';

            const defaultContent = 
                `Passez-vous une belle journee? Je vous souhaite la bienvenue dans le site web de mon jeu le plus attendu: KORI! Jetez un coup d'oeil et regardez ce que mon site peut vous offrir et n'oubliez surtout pas d'avoir du plaisir en lisant!
                <video width="45%" controls class="content-video">
                <source src="documents/koriOST.mp4" type="video/mp4">
                Votre moteur de recherche ne supporte pas le tag de cette video.
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
              <h1>A propos de KORI</h1>
              <p>Explorez et vivez la joyeuse vie de Kori avec ces amis. Partez dans de folles aventures que vous n'oublierez jamais, esperons-le!<br>
                <br>
              KORI est un jeu de production independante et de style RPG cree et imagine par Yahbl. Il est encore en production (depuis 2024) et va surement prendre quelques annees avant de sortir officielement, donc attachez votre ceinture!<br>
              <br>
              <img src="documents/WhisperAbout.png" alt="AMOUR ET SUPPORT!" style="width: 100%; max-width: 300px; position: ( 50%, 50%) ;"> <br> Developpement en cours...</p>
            `,
             
            gallery: `
              <h1>Galerie</h1>
              <p>J'ai fait quelques concepts d'arts et de sprites pour l'instant et je vais continuer a televerser les nouvelles choses que je fais et mettre a jour les anciennes!<br>
              <br> <img src="documents/koriSketch.png" alt="Premier sketch de Kori" style="width: 100px, max-width: 100px; Height: 200px;"> <br>
              J'ai essaye d'imaginer a quoi ressemblerait le personnage principal de mon histoire. Il devait montrer sa personnalite a travers le design et je pense que cela a plutot bien fonctionne. Ce n'est pas mon premier design, mais plutot mon dernier et je suis content du resultat final. Il ressemble a un gars deprime qui reste seul. Je me suis inspire du travail d'Inio Asano et de l'ecriture profonde de ses personnages. Et oui, son nom Kori vient du mot koritsu en japonais qui signifie isolement ou etre seul et sans amis. Cela a pris une sombre tournure…<br>

              <br> <img src="documents/WebConcept.png" alt="Concept du site!" style="width: 50%; max-width: 200px;"> <br><br>
              Je ne sais pas si vous comprendrez ce petit croquis que j'ai dessine, mais moi si! Voici a quoi je pensais que le site Web allait ressembler et je pense avoir fait du tres bon travail en recreant cela pour un debutant en codage. J'avais beaucoup de choses en tete et je voulais meme ajouter une demo du jeu qui, je ne pensais pas, prendrait autant de temps a realiser. (C'etait tellement difficile que j'ai abandonne l'idee). Ajouter un moyen pour les visiteurs de jouer au jeu etait quelque chose que j'avais vraiment sous-estime mais c'est toujours dans ma liste des choses a faire et qui sait... peut-etre qu'un jour je mettrai a jour le site et vous trouverez une demo bien faite!<br>

              <br> <img src="documents/whisperConcept.jpg" alt="Concept de Whisper!" style="width: 50%; max-width: 200px;"> <br><br>
              Whisper a ete le premier personnage secondaire que j'ai imagine. C'est un gars intelligent et timide qui ne s'entend qu'avec ses 3 amis proches (Kori, Rebel et Rex). Je savais exactement comment il agirait en tant que personnage et je l'ai dessine en refletant sa personnalite. Quant a son nom, eh bien... cela se passe d'explication!<br>
              
              <br> <img src="documents/rebelConcept.jpg" alt="Concept de Rebel!" style="width: 50%; max-width: 200px;"> <br><br>
              Tout comme son nom, elle est la rebelle du groupe. Enfreignant les regles et faisant ce qu'elle veut, Rebel n'est pas a etre prise a la legere et s'est fait une sacree reputation. Mais derriere son caractere grossier et effrayant, elle souffre en realite de nombreux problemes personnels et est une personne douce qui se soucie beaucoup de ses amis.<br>

              <br> <img src="documents/rexSprite.png" alt="Sprite de Rex!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              Je n'ai realise aucun concept pour ce personnage et je ne savais pas vraiment quoi faire avec. Je savais que je voulais 4 personnages pour le casting principal et j'ai juste realise un design sur place. Je pense que la touche finale est correcte et il ressemble a un gars cool, c'est l'effet que je voulais qu'il degage. <br>

              <br> <img src="documents/koriSprite.png" alt="Sprite de Kori!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              J'ai fait de mon mieux pour recreer sa tenue et son ambiance generale avec des pixels. C'est la premiere fois que je fais du pixel art et la premiere fois que je fais des sprites. J'ai rate un nombre incalculable de fois et j'ai du refaire beaucoup de choses. J'ai egalement du penser a des details precis comme la façon dont ses cheveux etaient orientes. Meme si cela semble simple, ça a ete tres penible lors du processus de realisation. <br>

              <br> <img src="documents/whisperSprite.png" alt="Sprite de Whisper!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              La chose la plus difficile dans ce design pixelise etait sans aucun doute les cheveux. Je ne voulais pas que ces cheveux ressemblent a une enorme boule de poils sur la tete et je ne pense pas vraiment que son design soit si fameux. Je peux faire mieux et j'essaierai peut-etre d'ameliorer son design pour qu'il soit aussi parfait que je le souhaite. <br>

              <br> <img src="documents/rebelSprite.png" alt="Sprite de Rebel!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              C'est a ce point la que j'ai realise que les cheveux etaient vraiment la chose la plus difficile a dessiner. Surtout quand les dessins sont si petits. J'ai fait de mon mieux ici et meme si cela ne ressemble pas vraiment au concept original, j'aime vraiment le resultat. Je ne pense pas qu'elle ait l'air si rebelle et je vais essayer de changer ce point de vue en creant differentes animations et en faisant ressortir son scenario dans l'histoire. <br>

              <br> <img src="documents/SpriteAnimation.gif" alt="Tout nos amis dans une aventure!" style="width: 50%; max-width: 200px; width: 65px; height: 275px;"> <br><br>
              Voici l'animation finale de chaque personnage. Je ne montre pas tous les angles mais vous pouvez les imaginer par vous-meme... ou attendre la sortie du jeu ! Quoi qu'il en soit, j'aime bien le resultat etant donne que c'etait la premiere fois que je realisais des animations de personnages en pixels. Où pensez-vous qu'ils vont ? <br>

              <br> <img src="documents/houseSprite.png" alt="Qu'on est bien chez soi!" style="width: 50%; max-width: 200px; background-color: white;"> <br><br>
              J'ai commence a creer les elements d'arriere-plan du jeu et donc bien sur a desinner des maisons. Les maisons ont pour theme les personnages qui y vivent, donc la maison de Kori est marron, la maison de Rex est verte, la maison de Rebel est violette et la maison de Whisper est grise...Original non? <br>

              <br> <img src="documents/koriAnimation2.gif" alt="Animation de Kori!" style="width: 50%; max-width: 200px; background-color: white;"> <br>
              Ces dessins sont bases sur mon premier croquis et je l'ai retrace 3 fois afin de realiser cette petite animation. Ce n'etait pas si difficile, mais cela m'a certainement pris beaucoup de temps. En realite, j'ai echoue les premieres fois parceque les dessins etaient trop sombre mais j'ai reussi a les arranger  et voici le resultat final (qui se trouve egalement en bas a droite de votre ecran en ce moment)!
              <br><br> </p>
            `,

            QnA:` 
              <h1>QnA</h1>
              <ul><br>
                <li><strong>Q:</strong> C'est quoi KORI?<br><strong>R:</strong> Kori est l'un de mes nombreux projets que j'avais en tete. Pour l'instant, la vision du jeu me parait assez clair et qui sait, peut-etre que le jeu va sortir un jour!</li><br><br>
                <li><strong>Q:</strong> Est-ce que votre idee est originale?<br><strong>R:</strong> Je me suis fortement inspire des jeux que j'ai adore comme Omori fait par OMOCAT, Undertale fait par TOBY FOX et Earthbound par Shigesato Itoi. Cependant, j'ai fait de mon mieux pour mettre ma petite part de creativite dans le jeu!</li><br><br>
                <li><strong>Q:</strong> Quand est-ce que le jeu va sortir?<br><strong>R:</strong>Le developpement du jeu viens tout juste de commencer! J'ai donc l'idee en tete et l'histoire et les personnages sont deja ecrit. En sachant que je ne suis pas encore un expert en codage et que je travaille sur ce projet tout seul, je pense qu'il faudra quelques annees avant que je puisse tout terminer. Au debut, j'ai planifie le tout pour que le gameplay fasse au minimum 30 heures de long, mais je pense qu'il serait preferable que le jeu soit court et tres bon plutot que long et mauvais, donc je verrai au cours de la programmation du jeu.</li><br><br>
                Ces questions etaient des questions basiques que je pensais que vous poseriez, si vous en avez d'autres, n'hesitez pas a me les poser en m'ecrivant sur ce courriel: korigameproduction@gmail.com et je les ajouterai ici avec vos repponses!
              </ul>
            `,

            future: `
              <h1>Contenu futur</h1>
              <p><br>Ce site Web est pratiquement termine, a l'exception de quelques futures corrections et mises a jour, vous en savez maintenant beaucoup sur mon projet KORI. Le contenu le plus important que je pourrais ajouter sera la demo, mais je devrai apprendre un peu plus le developpement Web pour pouvoir y parvenir. Le jeu mettra des annees a etre parfait et je ne le sortirai que si je suis fier du resultat final. J'ai adore realiser ce projet et je suis plus qu'heureux d'en faire plus. J'ai appris beaucoup de nouvelles choses et je suis sur que je continuerai a apprendre des choses nouvelles et interessantes. J'ai hate de voir le jeu devenir une realite et j'espere que vous l'etes aussi. <br><br><br><br><br><br><br><br><br><br><br><br><br>Merci beaucoup pour tout votre soutient!</p>
            `
              
          };
            content.innerHTML = sections[section] || 'Contenu indisponible.';

            content.classList.remove('fade-outSections');
            content.classList.add('fade-inSections');

        }
