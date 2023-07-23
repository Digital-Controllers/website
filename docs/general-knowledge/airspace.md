# Airspace

While the vast expanse of sky may seem homogeneous, we split airspace up into many different categories, depending on the services provided within it, level of traffic, the responsibility of the controller, and many more.

## Airspace Classification

Very generally, airspace can be split up into two categories, controlled airspace and uncontrolled airspace. Beyond this there are many categories, or classes, of airspace, however, only three of these are useful in DCS.

These are:

- Class A
- Class C
- Class G

These are said as "class alpha", "class charlie" and "class golf".

### Class A

Class A is the most restrictive airspace classification, you are only able to enter as a flight under Instrument Flight Rules (IFR). ATC clearance is required to enter, and you must comply with ATC instructions while flying within class A airspace. For this reason, it is commonly used in very busy airspace or at high altitudes (unless overwritten by ATS part 2, all airspace between Flight Level 300 and 600 is class A). Within class A, ATC must provide separation and deconfliction between all aircraft.

### Class C

Class C is two levels less restrictive than class A (class B is only used in some parts of the US so we have chosen to ignore its existance) you can enter as both an Instrument Flight Rules (IFR) flight and a Visual Flight Rules (VFR) flight. It is the least restrictive type of controlled airspace we use. However, you still require ATC clearance before entry and are required to follow ATC's instructions. ATC is required (at a minimum) to separate all IFR flights from each other, and to separate IFR flights from VFR flights, but is only required to pass traffic information to VFR flights about other VFR flights. Because of this, it is a very flexible type of airspace, providing a good balance between autonomy for pilots and the safety of the system as a whole. It is often used around medium sized airfields and is the most used type of controlled airspace in DCS.

### Class G

Class G is the least restrictive type of airspace. As it is uncontrolled, there is no requirement for ATC clearance on entry, or to do anything within class G airspace. Hence why this is the default airspace classification when no controller is online. When a controller is online, however, some like to offer 'Flight Information Services' in uncontrolled airspace. These FISs provide different levels of information to pilots depending on the service chosen.

## Types of Airspace

While the classifications of airspace are crucial to determining the responsibility of a controller within the section of airspace, the type of control provided and which controller is responsible may differ greatly between different types of airspace - each of which has its own purpose.

### Military Aerodrome Traffic Zone

The Military Aerodrome Traffic Zone (MATZ) is an area of airspace around a military airfield that provides an operating area within which military aircraft can operate safely. When a tower controller comes online for the relevant airfield, it takes the airspace classification of the airspace around it (often class C) and is entirely the tower controller's responsibility (in Visual Meteorological Conditions).

The MATZ is composed of three sections - one central cylindrical section of airspace and two 'approach stubs' on either end of the longest runway - for airfields with many runways there may be more approach stubs - this is all detailed in the relevant ATS part 2.

The central section is 5nm in radius around the centre of the longest runway and extends from the surface to 3,000ft above aerodrome level (aal.). Each approach stub extends to 10nm from the centre of the longest runway but are only 4nm wide - 2nm either side of the runway's extended centreline. Vertically the approach stubs extend from 1,000ft aal. to 3,000ft aal.

Aircraft within the MATZ are normally limited to 250kt unless otherwise cleared by ATC or as a requirement of certain procedures.

### Control Zone

A Control Zone (CTR) usually surrounds airfields that have a radar controller (for reasons of flexibility, this is generally all major airfields in DCS). The CTR may be either class C or class A at particularly busy aerodromes. When entering from uncontrolled airspace, a clearance is always required to enter a CTR (see DCP102: Radiotelephony, Section 4, Chapter 1, 12. for detailed guidance). The CTR's main purpose is to provide an area of protection around a sufficiently large aerodrome - since these are major choke points in the general scheme of the sky. The area they cover may be more or less anything but is detailed - as with anything region specific - in the relevant ATS Part 2.

### Control area

The Control Area (CTA) often surrounds a CTR is the domain of an approach controller - both intermediate approach and final approach - to get aircraft from enroute airspace, into the CTR and established onto an approach. Similar to a CTR, a CTA may be class A or class C airspace (however, class C is much more common). At this level, airspace may take any geometric form, but a CTA generally won't extend above 15,000ft aal.

### Terminal Control Area

The Terminal Control Area (TMA) is a section of lower level en-route airspace - usually surrounding busy airspace (hence needing more controllers). A TMA may also be either class A or class C airspace. This is the domain of the terminal controller. Again, it may take any geometric form but generally won't extend above 20,000ft aal.

### Military Operating Area

Unlike the previous forms of airspace, which are normally permanent, Military Operating Areas (MOAs) may become active, inactive and change shape at any time. This is because military conflict is not static and thus the area providing a safe operating environment for military aircraft has to adjust. MOAs are the domain of the tactical controllers.

### Carrier Control Area

As the Carrier Control Area (CCA) may suggest, it is similar to a CTA but centred around an aircraft carrier. It's a cylindrical section of airspace with a radius of 50nm around the carrier and extending to FL600 vertically. Normally operating as class C airspace, but aircraft not under the control of the carrier are able to enter without clearance from the Carrier Air Traffic Control (CATC) personnel.

Within the CCA sits the Carrier Control Zone (CCZ) into which no aircraft other than carrier aircraft should enter - a cylindrical section of airspace with a 5nm radius around the carrier extending to 2,500ft.

## Further Reading

- DCP101: Air Traffic Services Part 1
- DCP102: Radiotelephony
- DCP15x series - ATS part 2
