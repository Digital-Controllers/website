Radar is a system that allows for the determination of distance (range), angle (azimuth) and radial velocity of objects relative to the location of the radar system.

Radar systems can generally be split into two categories, both of which are used in aviation:

- Primary Surveillance Radar (PSR)
- Secondary Surveillance Radar (SSR)

## Primary Surveillance Radar

PSR is the traditional form of radar (usually realised as a pulse-doppler radar very similar to that found on modern fighter aircraft). This is where a pulse of radio waves are transmitted, they reflect off an object, and by recording where in the scan the pulse was transmitted, timing the pulse, and measuring the doppler shift of the returning pulse, distance, angle and radial velocity can be determined.

![Pulse-Doppler Radar](../assets/doppler_radar.webp)

The information from a PSR is usually just displayed as a dot, however, if contact is maintained, previous locations can be used to calculate a track direction, and ground speed, this is why a contact that is turning's instantaneous track will be different from its radar track - something to keep in mind when looking at your scope. Each contact can then be classified with a callsign, 

## Secondary Surveillance Radar

The other category of radar is SSR, instead of transmitting a pulse and awaiting its return, SSR is powered by equipment within aircraft, this is known as an aircraft's transponder. A transponder will transmit certain information about the aircraft (this will vary depending on the type of transponder fitted to the aircraft). This information can then also be used to display aircraft location to a controller. For an aircraft to be classified, it is given a 4-digit octal number (i.e. digits go from 0-7) with which that contact may be classified. For this reason, if an aircraft needs to be individually identified, it should have a unique SSR code (known as a squawk code).

### (Civilian) Types of Transponder

**Mode A**

Transmits the identifying code only.

**Mode C**

Transmits identifying code, and pressure altitude.

**Mode S**

Transmits a unique 24-bit address assigned to each aircraft and all Mode C information. Also can be used for data exchange.

Aircraft flying in higher traffic areas generally require at least a Mode C transponder and are required to "squawk mode C" on takeoff.

Each transponder also has IDENT functionality, this will 'light-up' an aircraft on a controller's screen for easier identification.

### (Military) Types of Transponder

Military transponders have additional information over civillian transponders that aids them in performing military tasks, these transponders form part of the Identify Friend or Foe (IFF) system.

**Mode 1** (Military only)

Provides only a 2-digit octal "mission code" which is used to identify the aircraft type or mission.

**Mode 2** (Military only)

Provides only a 4-digit octal unit code or tail number.

**Mode 3/A**

Same as civilian Mode A.

**Mode 3/C**

Same as civilian Mode C.

**Mode 4** (Military only)

Provides a 3-pulse reply, the delay is based on the encrypted challenge, may be used to identify the coalition of an aircraft.

**Mode S**

Same as civilian Mode S.

### Specified Codes

In certain circumstances, an aircraft may communicate a situation using an SSR code, the standards specified by ICAO are:

- 7500 - Unlawful interference (Hijacking)
- 7600 - Radio failure
- 7700 - General Emergency

## Further reading

More can be read on this topic at:

- [Skybrary](https://www.skybrary.aero/articles/transponder)
- [Wikipedia SSR](https://en.wikipedia.org/wiki/Secondary_surveillance_radar)
- [Wikipedia PSR](https://en.wikipedia.org/wiki/Primary_radar)

