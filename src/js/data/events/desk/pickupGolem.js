export let deskPickupGolem = {
    eventName: 'Pickup Golem',
    interactions: [
        { active: true, name: 'Inspect Golem', baseCooldown: 100, clear: true, snippets: ['You settle the golem in your open palm for inspection'], leadsTo: ['Sniff Golem','Lick Golem','Put Golem In Mouth'] },
        { active: false, name: 'Sniff Golem', baseCooldown: 100, snippets: [`You lean in close and take a slow draw of the golem's scent. It smells vaguely like clay and something sweet you can't place.`,`You raise your hand and let your nose bump the golem and take in it's earthy and strangely sweet scent.`,`You lean in and pin the golem to your palm under your nose and suck in the unexpectedly enticing aroma reminiscent of unfired pottery and a nondescript sugary treat.`] },
        { active: false, name: 'Lick Golem', baseCooldown: 100, snippets: [`You drag your tongue up the length of the golem's body, nearly lifting it off it's feet as its alluring, tangy sweetness tickles your taste buds.`,`Your tongue pushes the golem down on their back and leaves them soaked in saliva after it sweeps across them. The taste leaves your mouth watering.`,`Moving in closer, the smell becomes too enticing and you can't help but sneak a taste. a quick swipe of your tongue against their chest sends the golem stumbling back and leaves a delectably sugary taste lingering on your tongue.`] },
        { active: false, name: 'Put Golem In Mouth', clear: true, baseCooldown: 100, snippets: [`Spreading your lips wide you casually flick your wrist and toss the golem inside.`,`Rolling the golem back into your fingers you wrap your lips around the golem and fingers both, slowly dragging the fingers from your lips and leaving the golem trapped inside.`], leadsTo: ['Let out of Mouth','Roll around Mouth','Suckle On','Swallow'] },
        { active: false, name: 'Let out of Mouth', clear: true, baseCooldown: 100, snippets: [`Reluctantly, you open your mouth and let the saliva-drenched golem slide out onto your waiting palm`,`Pursing your lips, you puff out your cheeks briefly and use the pressure to spit the golem out into your hand.`], leadsTo: ['Sniff Golem','Lick Golem','Put Golem In Mouth'] },
        { active: false, name: 'Roll around Mouth', baseCooldown: 100, progressInteractions: ['Swallow'], snippets: [`You slosh the golem back and forth across your tongue.`,`You Roll the golem around your mouth, thoroughly soaking them in your saliva.`,`You curl your tongue, letting the golem slide back towards the entrance to your throat then tilt forward just in time to stop them from falling inside.`] },
        { active: false, name: 'Suckle On', baseCooldown: 100, progressInteractions: ['Swallow'], snippets: [`Your tongue pushes the golem against your palette as you suck on them till most of the saliva is pulled free.`,`You pin them against the inside of one of your cheeks and casually suckle on them like a hard candy.`,`You draw in your breath with your lips sealed, tongue holding the golem against your teeth to build pressure, sucking the flavor off of their saliva-soaked fur.`] },
        { active: false, name: 'Swallow', baseCooldown: 100, baseCounter: 3, clear: true, final: true, snippets: ['Tilting your head back, you let the golem slide back to the entrance to your throat before swallowing them down.',`Without warning you curl your tongue to shove them to the back of your mouth and, without ceremony, gulp them down`] },
    ],
    startingDesc: ['You reach down and pluck up a golem','You scoop a golem up in your palm','You gently grab one of the golems off']
}