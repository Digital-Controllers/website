# Air Traffic Control Positions

There are many different types of Air Traffic Control (ATC) positions, and each type provides a slightly different service. While all ATC positions have the common goal of creating a safe and expeditious flow of air traffic.

The different ATC positions can be split into three broad categories:

- Aerodrome Control
- Radar Control
- Flight Information Services

Generally, the type of service provided can be found from the latter half of the controller's callsign:

| Service                  | Suffix                                             |
|--------------------------|----------------------------------------------------|
| En-Route Control         | Control                                            |
| Radar (in general)       | Radar                                              |
| Approach Control Radar   | Radar/Director or Departure/Approach (less common) |
| Air Control              | Tower                                              |
| Ground Movement Control  | Ground                                             |
| Ground Movement Planner  | Delivery                                           |
| Precision Approach Radar | Talkdown                                           |
| Flight Information       | Information                                        |

## Aerodrome Control

As the name might suggest, Aerodrome Control covers everything to do with an aerodrome (i.e. airfield/airport) and the airspace immediately surrounding it. At first it may not seem obvious why such a small area of sky has so many controllers but aerodromes are major choke-points for traffic and thus see significantly higher traffic density than other areas of sky.

Aerodrome Control still has different sub-positions, these are:

- Ground Movement Planner
- Ground Movement Controller
- Air Controller

It is different from radar control since while aerodrome control positions may use a radar to assist in performing their roles, their primary method of control is looking out of the window!

### Ground Movement Planner

The Ground Movement Planner (GMP) provides aircraft with their flight clearances and organises aircraft releases with Radar Control positions. They are typically also responsible for high-level traffic management, ensuring that both the aerodrome's taxiways and the airspaces surrounding it do not become overloaded.

The GMP uses the radiotelephony frequency callsign "[Aerodrome] Delivery", e.g. "Anapa Delivery" and is often also known as the Clearance Delivery position.

The coordination callsign used by the GMP is "[Aerodrome] GMP".

### Ground Movement Controller

The Ground Movement Controller (GMC) controls all aircraft movements on the ground that don't involve an active runway. This may include:

- Start-up clearances
- Pushback clearances
- Taxi clearances
- Hold short instructions
- etc.

They also create a departure sequence so that aircraft can depart in the most efficient order.

The GMC uses the radiotelephony frequency callsign "[Aerodrome] Ground", e.g. "Anapa Ground".

The GMC uses the coordination callsign "[Aerodrome] GMC".

### Air Controller

The Air Controller controls all aircraft movements to do with an active runway and all aircraft in the vicinity of the aerodrome. For military aerodromes this usually means the Military Aerodrome Traffic Zone (MATZ) as described in Airspace.

The Air Controller may provide:

- Take-off clearances
- Landing clearances
- Line-up instructions
- Traffic circuit-based instructions
- etc.

The Air controller uses the radiotelephony frequency callsign "[Aerodrome] Tower", e.g. "Anapa Tower".

The Air controller's coordination callsign is "[Aerodrome] AIR".

## Radar Control

Radar control is generally responsible for maintaining the safe and expeditious flow of traffic through the sky where it isn't in the vicinity of an aerodrome. To achieve this, radar controllers use different radar systems - known as ATS Surveillance Systems in the DCPs - to provide control and ensure aircraft don't collide with each other.

Radar Control can be split into several different positions:

- Area Control
- Terminal Control
- Intermediate Approach Control
- Final Approach Control
- Precision Approach Radar Control

The different types of radar control generally control different sectors of airspace at different levels.

### Area Control

Area Control is responsible for the upper levels of airspace - often covering large swaths of a country or Flight Information Region (FIR). The exact areas that an area control sector covers is detailed in the DCP15x series of publications.

An area controller uses the radiotelephony frequency callsign "[FIR name] Control", e.g. "Rostov Control"

It should be noted that different controllers covering different sectors often use the same RTF callsign. This is because the callsign is not specific to each controller but rather the type of position they are covering.

Area control uses the coordination callsign "AC [sector name]", e.g. "AC Rostov West".

Note that a controller may be using the "Rostov Control" RTF callsign but since they are contolling the Rostov West sector, they use the coordination callsign "AC Rostov West", there may be many controllers on the same intercom using the "Rostov Control" RTF callsign so using that might cause quite some confusion!

### Terminal Control

Terminal Control is responsible for lower levels of airspace, within a Terminal Control Area (TMA - don't ask!) - these are usually smaller, lower areas of airspace usually centred around large cities with multiple large aerodromes.

Like an area controller, a terminal controller also uses the radiotelephony frequency callsign "[FIR name] Control", e.g. "Rostov Control". This means that if the Rostov-na-donu FIR is fully staffed as detailed in DCP151, there may be seven controllers all using the "Rostov Control" RTF callsign!!

A terminal controller uses the coordination callsign "TC [sector name]", e.g. "TC Krasnodar East".

### Intermediate Approach Control

Intermediate Approach Control is responsible for taking arriving traffic from a terminal controller and creating a rough sequence to be formed into a perfect sequence by the final approach controller. They are also often responsible for departing traffic but this depends on the airspace setup so the relevant ATS part 2 publication should be referenced for this.

An intermediate approach controller may use one of many different RTF callsigns:

- "[Aerodrome] Radar"
- "[Aerodrome] Director"
- "[Aerodrome] Approach" (this one's rare outside the US though)

The coordination callsign used will always be: "[Aerodrome] INT" e.g. "Anapa INT" (Anapa INT uses the RTF callsign "Anapa Radar").

### Final Approach Control

Final Approach Control is responsible for taking the rough sequence created by Intermediate Approach Control and establishing all aircraft onto an approach. They may be responsible for some departing traffic - depending on the airspace setup and ATS part 2.

A Final approach controller usually uses the "[Aerodrome] Director" RTF callsign, e.g. "Anapa Director".

The coordination callsign of a final approach controller is "[Aerodrome] FIN", e.g. "Anapa FIN".

### Precision Approach Radar Control

The Precision Approach Radar (PAR) controller has a radar that updates much faster but is only useful for a small area - usually the final approach segment of an approach. This allows them to talk aircraft down to the ground in Instrument Meteorological Conditions where the pilot is not able to use an Instrument Landing System. They can also monitor multiple aircraft established on an ILS.

A PAR controller uses the RTF callsign "[Aerodrome] Talkdown", e.g. "Anapa Talkdown".

A PAR controller uses the coordination callsign "[Aerodrome] PAR", e.g. "Anapa PAR".

## Flight Information

Flight Information controllers provide one of two flight information services (FISs) to aircraft outside controlled airspace.

Flight Information controllers may be split into two categories:

- Information Providers
- Lower Airspace Radar (LAR) Controllers

### Information Providers

Information providers do not have a radar in front of them yet still provide information to aircraft over a large area, this is because they are not able to deconflict traffic but instead are a point of contact for aircraft and provide weather and aerodrome information along with general traffic information. This is known as a Basic Service.

Information providers use the RTF callsign "[Position] Information", e.g. "Krasnodar Information".

Information providers use the coordination callsign "Info [Position]", e.g. "Info Krasnodar".

### Lower Airspace Radar Controllers

In addition to a Basic Service, LAR controllers also have radar information, and so can provide specific traffic information and deconfliction, in DC we call this a Radar Service (this is a combination of the IRL Traffic Service and Deconfliction Service - we don't need both in DCS!).

LAR Controllers use the RTF callsign "[Position] Radar", e.g. "Krasnodar Radar".

The coordination callsign used by a LAR controller is "LAR [Position]", e.g. "LAR Krasnodar"

## Further Reading

- DCP101: Air Traffic Services Part 1
- DCP103: Coordination
- DCP15x Series - ATS Part 2
