# Contributing
## Dos and Don'ts

**Thanks for your interest in contributing! We massively appreciate your support. Before you get started, we do have a couple of standards and rules to adhere to:**

**Do:**

- write in British English, for the sake of standardisation.
- write in a concise and simple manner, limiting the number of separate pages necessary.
- ask for advice in the [Discord](https://discord.gg/8qXDBVs2XU) if you're unsure - we're all in this together!
- [include Oxford-style citations as footnotes](https://squidfunk.github.io/mkdocs-material/reference/footnotes/), if you're referencing advanced concepts or dealing with a contentious topic. Too many citations isn't a bad thing - too little is.
- use well-structured markdown, using headers correctly. 

**Don't:**

- overwrite lots of information without consulting others first.
- reference any documentation you are not *100% certain* is *unclassified* and completely available to the public. Documents restricted by distribution statements are *not* unclassified.
- add images and sounds unless you're confident your use falls under Fair Use or is otherwise permitted by the media's copyright license. Wikimedia is a good place to search for examples.

!!! info "Copyright Complaints"
	For concerns and inquiries, contact the project lead (Quantify) at quantifygg@gmail.com.

## Standards

Discussion about the exact standards that will be used as bases for our documentation is ongoing. Join the conversation at our [Discord](https://discord.gg/8qXDBVs2XU) to suggest your opinion. 
At the moment, the general consensus is that ICAO standards should be used wherever possible. FAA-style procedures will rarely be utilised, but may be used in cases such as VFR (where the British style of offering various "services" is overcomplicated, particularly for our limited use case.) A VATSIM-style "Top-Down" control method shall be used - a controller managing an approach position has authority over *all* traffic in the region, whereas a ground controller only has to deal with airplanes on the taxiways/aprons. This allows a controller to choose their desired workload.

We strive to create a singular standard for controlling civilian *and* military traffic. Of course, different traffic types will be treated differently, but avoiding overcomplication is critical, particularly for casual sim pilots. *Pilots want to have fun, and reading through hundreds of words of "How To" doesn't feel fun to many!*
Due to the flexibility of our documentation sources, please ensure you cite appropriate sources wherever possible; it's critical to know where our information comes from.

## Formatting Guide

Information should be split into 4 different categories:

 1. General Knowledge 
 2. Ground
 3. Tower
 4. Approach/Departure

**Specific topics should then be nested inside these categories.** For instance, the Ground category could contain "VFR and IFR Clearances" as an individual page.

Here's a brief summary of each category's intended purpose and outcome for the reader.

**General Knowledge**

Anything under this section should be considered a fundemental element of air traffic control. The reader should be able to get a basic grasp on the concept of vectors, clearances and their limits, VFR/IFR, meteorology, radiotelephony standards, etc.
If something feels like it fits better in a specialised category, place it there instead. For instance, a guide on structuring IFR clearances should be placed in *Ground*, whereas an explanation of what IFR is should be placed in *General Knowledge*.

In brief, use this section to teach a controller everything they need to know before learning about a specific position. 

**Ground**
This category encompasses VFR/IFR clearances and taxi clearances. Controllers should gain a good understanding of providing VFR and IFR clearances, and should know how to communicate that clearance to Tower or an applicable Radar controller, depending on what the next highest position is. 

**Tower**

This category encompasses radar separation, basic IFR approaches, standard departures, runway crossings, visual circuits and missed approach procedures. The reader should understand how to manage traffic safely and efficiently, the caveats associated with a non-precision approach, minima and how to manage their workload safely.

**Approach/Departure**

Advanced topics can be explored in this category (though more so in the Area Control cateory.) The reader is assumed to have a good general knowledge of ATC procedures by now, so expanding on the various approach types available to a pilot is a good idea. The Approach controller should have a good understanding of PAR/APV approaches.
The reader should understand how to issue radar vectors effectively, taking into account winds and pilot reaction times. The reader should be able to communicate rapidly with Tower, and to manage emergencies. It is likely that the workload for an Approach controller is far higher than a Tower controller, particularly if a Tower controller isn't available to alleviate any pressure, so brevity should be consistent and refined as set out by ICAO. The reader should also understand how VFR traffic act in an aerodrome's FRZ, understand different types of airspace and monitor for potential conflicts.
As the final station before a handoff to a TAC C2 agency, the reader should be familiarised with the basic roles of a GCI. They should understand how to communicate handoffs effectively and alleviate a GCI's workload by managing emergency traffic.

*This Formatting Guide is not final, and is subject to change. Feel free to make your own amendments, but please contact Quantify#8384 on Discord beforehand.*
