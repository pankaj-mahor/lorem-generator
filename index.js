const text = [
    "She wouldn't listen to me. 'I'm telling you,' she said, 'the king of the pumpkins lives in the middle of the woods and the woods that he lives in are the woods right next to our house, the woods you can see out of the window over there.' She pointed with her hand to the woods that were, in fact, just outside the window behind our house. 'He doesn't live in a field like the other pumpkins,' continued mother, 'because he's not an ordinary pumpkin. He's the King Pumpkin.'", 
    "She wouldn't listen to me. 'I'm telling you,' she said, 'the king of the pumpkins lives in the middle of the woods and the woods that he lives in are the woods right next to our house, the woods you can see out of the window over there.' She pointed with her hand to the woods that were, in fact, just outside the window behind our house. 'He doesn't live in a field like the other pumpkins,' continued mother, 'because he's not an ordinary pumpkin. He's the King Pumpkin.'" , 
    "Still, I decided to go and find the king of the pumpkins, partly because I was bored, partly because I was curious, and also – of course – because I wanted to know if my mother really was talking nonsense or not.",
    "Mother often talked nonsense, I have to say that. There was the time she told me that the moon was made of cheese. I knew that was nonsense. Then there were all the stories she told me. Stories about frogs, princesses, princes and shoes. Stories about donkeys and unicorns, gnomes and elves, magic mirrors and magic cooking pots. Stories about why the stars are exactly the way they are, why the river that runs through our town has the name that it has, stories about where the sun comes from, why the sky is so far away and why the elephant has a long trunk." ,
    "Some of these stories, I think, might have been true. I was never sure, and it was difficult to find out. This time, though, with this story about the king of the pumpkins, it was going to be easy to find out if she was telling the truth or not." ,
    "Some people used to call my mother a witch, but I knew that she wasn't a witch. Just a bit strange perhaps. And she used to talk nonsense. Perhaps it was also because of the black cat we had. People say that witches always have black cats, and we had a black cat. But Mog wasn't a witch's cat. He was just a regular black cat. Mog could talk, though, I have to say that. Perhaps that isn't so regular in a cat, now I think about it." ,
    "Anyway, I was telling you about the time I went to find the king of the pumpkins. I set off with Mog the cat into the woods to look for the king of the pumpkins. Even though we'd lived in that house near the woods all my life, I had never gone into the middle of the woods. This was the first time. I was glad I had Mog with me. I was a bit scared, even though I didn't really think that the king of the pumpkins lived there." ,
     "When people said my mother was a witch, I told them that witches don't have children. 'Yeah,' they replied, 'that's true. But you look more like an elf than a regular kid.' I looked in the mirror to see if I looked like an elf or not. I think I looked like a regular kid, but you never can tell really" ,
     " Eventually, we got to the middle of the forest. At least, I think it was the middle of the forest, but it's difficult to say exactly. There was a clearing, a big space where there were no trees. In the middle of the clearing was the king of the pumpkins." , 
     "At least, I think it was the king of the pumpkins. It looked like a man at first. He was quite tall and had legs and arms made from sticks. He was wearing an old black coat. His head was a pumpkin. His head was the biggest pumpkin I had ever seen." , 
     "As we walked back along the path out of the forest, I started to think about what was real and what was not. Could things that were made up also be true? What was the difference between 'story' and 'history'? One is real and the other isn't – is that it?",
     "Hmm … I'm not sure,' said Mog. 'Those stories she tells sometimes … about why the night is black and the day is blue, about golden eggs and girls with golden hair, about why people have ten fingers, ten toes, two feet, two hands and two eyes … Sometimes I think she's crazy, and sometimes I think she might be right …'" ,
     "When i was child, my family, parent's and grandparents, did not invent story like that for me. They usually read classic story from book's. Evan so, my imagination was provoked to all sorts of fantastic events. It is a period from our life when everything is possible, when all the world is yours, when all are ever ending. Now, i'm 50 years. Now i had a different perspective regarding the world. Just one example : covid-19. But i'm sure we'll pass through pandemic crisis well . Everything will be fine. Let's be positive, let's have positive attitude ."
    ];
const form = document.querySelector(".lorem-form");
const result = document.querySelector(".lorem-text");
const amount = document.getElementById("amount");
const output = document.querySelector(".result");
form.addEventListener("submit" , function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random()*text.length);

    if (isNaN(value) || value < 0 || value > 12) {
        // output.innerHTML = text[0];
        result.innerHTML = ("<p class='result'>" + text[random] + "</p>");
    }else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item){
            return "<p class='result'>"+[item]+"</p>";
        }).join("");
        console.log(tempText);
        result.innerHTML = tempText;
    }
});