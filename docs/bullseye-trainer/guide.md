# DCS Bullseye Guide

All technical information has been taken from the ACC MTTP September 2021 document.

## What is Bullseye?

Bullseye is a known (or briefed) geographical location used as a reference for relative locations. From the ALSSA ACC book definition, "Bullseye is an established reference point from which the position of an object can be referenced by bearing(magnetic) and range(nautical miles)." The bullseye can be named more or less anything as long as it has been briefed, but in DCS we generally just call it "Bullseye" when referencing it.

As a quick example, if the briefing states that Bullseye is right over Damascus and you are 30 nautical miles West of Damascus at 20'000ft, then your Bullseye location is `Bullseye 270/30 20'000`.


## Visualise the Circle

During combat the pilot's faculties may already be taxxed to the breaking point, so performing the proper math to determine the bearing and distance to a target isn't advised. Plus, it takes too damn long.

Best practice to perform the calculation quickly is to visualise a circle with Bullseye being the center point. Plot out your location mentally, do the same with the target, then 'guesstimate' the approximate bearing and distance you would need to fly to get there.

Unless you and your adversary are in the visual arena, ballpark estimates are usually sufficient to point your nose in the general direction and let your radar do the rest of the hard work. Modern DCS fighter aircraft all have 'Bullseye over Aircraft' and 'Bullseye over Cursor' feedback, making this even easier.


## Communicating Bullseye

### TAC C2

When communicating Bullseye, you will be most likely talking to some form of Tactical Command and Control(TAC C2). Multiple terms get thrown around in DCS for these eyes-in-the-sky, AWACS and GCI being the most common. There are many forms of TAC C2 that are utilized on the battlefield and they all fall under the umbrella term 'Tactical Command and Control' (TAC C2), so that is the term that will be used in this document.

### Format
`Bullseye [Bearing] / [Range] [Altitude]`is the format used to communicate Bullseye positions, however remember that general radio procedures still apply.

Example for Friendly: `Whiskey 1, Darkstar. Bullseye 128/45 8'000, friendly`. In this case, Darkstar(C2) is letting Whiskey 1 know the location of a friendly unit. This won't be used much in DCS due to enemy information being more pertinent and the prevalance of datalink and interrogation, but it does still get used.

Example for Enemy: `Whiskey 1, Darkstar. Group, Bullseye 070/120 23'000. Flank, Hostile, Single Contact`. It's here where Bullseye calls really shine and start to convey a lot of information quickly. Again, we have Darkstar hailing Whiskey 1. He tells Whiskey that he sees a radar contact(Group) at Bullseye 070/120 23'000. Darkstar also states the enemy aircraft's aspect(Flank), identification and engagement rules(Hostile), and how many aircraft comprise the radar contact(Single Contact).

We'll expand on the variations even further, but first let's go over some quick pronunciation rules.

### Pronunciation

The Bullseye format has some very specific pronunciation rules designed to minimize confusion when information is relayed quickly.

Bullseye: You should never truncate 'Bullseye' to 'Bulls' as it can be confused with 'BRAA' or other words over radios with bad readability or if the speaker has a thick accent.

Bearing: Always pronounce the bearing attribute in a three digit, digit by digit form. For example, 270 would be 'two-seven-zero.' 091 would be 'zero-nine-one.' If the bearing happens to be exactly North, use 360 ('three-six-zero') instead of 000.

Range: To reduce confusion between bearing and range, pronounce ranges as a whole number. For example, 20 is 'twenty.' 133 is 'one-hundred-thirty-three.' This also eliminates the need for a 'miles' call, although you may still do so according to preference.

Altitude: Everything is given in feet(ASL according to C2 QFE). Round any calls to a factor of 500 so as to reduce unnecessarily long numbers. Example: fifteen-thousand-five-hundred as opposed to fifteen-thousand-six-hundred-forty-nine. Being accurate with those few dozens of feet doesn't matter when you're flying a fighter that can climb thousands of feet in a few seconds. Again, there's no need to follow with a 'feet' call, but you may do so if you wish.


## Anatomy of the Call

### Core Format
`[Group Name][Bullseye][Altitude][Track/Aspect][Declaration][Fill-Ins]`

The above is the core format for any Bullseye call. It might seem complicated, but I'll break it down piece by piece and hopefully it won't be as daunting as it looks.

Group Name: When dealing with multiple groups in the same area, C2 will often assign the groups a name. These names will ALWAYS be either location based `NORTH GROUP, SOUTH GROUP, etc`, range based `LEAD GROUP, MIDDLE GROUP, TRAIL GROUP`, descriptive `SINGLE GROUP, ADDITIONAL GROUP, POP-UP GROUP, etc`, or some combination of the above.

Bullseye: The Bullseye location of the target.

Altitude: The altitude of the target.

Track/Aspect: This denotes the direction the target is travelling, either in respect to your aircraft `HOT, FLANK, BEAM, DRAG`, or as a cardinal direction `TRACK NORTH, etc`. Note that `HOT` aspect is usually assumed unless otherwise voiced by the controller.

Declaration: This is where C2 will inform you of the target type `BOGEY, FRIENDLY, NEUTRAL, BANDIT, HOSTILE`. Depending on your briefing, this may also determine your engagement rules.

Fill-Ins: This is extra information to assist you with your engagement. It can be the size of the group `TWO CONTACTS, HEAVY-THREE CONTACTS, etc`, altitude `HIGH(over 40'000ft)`, or speed `FAST(mach 1-1.5) VERY FAST(mach 1.5+)`.

As you can see, the concepts aren't complicated and using them in DCS only takes a little practice. Most of the time it will be C2 relaying this information to you, and your only job is to understand it.
