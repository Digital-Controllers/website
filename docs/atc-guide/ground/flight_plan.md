# Flight Plans

An ATC clearance is an authorization by ATC, for the purpose of preventing collision between known aircraft, for an aircraft to proceed under specified conditions within controlled airspace. A filed flightplan allows this clearance to be significantly shortened, and to significantly reduce communication between ATC sectors and controllers.

Prior to taxi, pilots **SHOULD** receive a flight clearance for their intended sortie.
This may be a simple VFR clearance, or a full IFR clearance that is issued based on a verbal request from the pilot to ATC, or based on a pre-filed flight plan.
A clearance may be to the final destination or partial clearance.

For example, a pilot **MAY** request a clearance via a pre-defined route to an Operating Area (AO) and then cancel IFR to fly VFR in the AO.
Once complete and ready to return, the pilot **MAY** request IFR clearance back to their destination airport.

## Filing Flight Plans

When practicable, pilots **SHOULD** file a flight plan with the correct controlling agency prior to departure. Basic information can be passed in any suitable manner but longer information can be filed.

## Flight Plan Content

1. Aircraft Identification/Callsign
2. Flight rules and type of flight
3. Number, type of aircraft and equipment carried
4. Departure aerodrome and time
5. Cruising speed, cruise level and route
6. Destination aerodrome, estimated time enroute and alternates
7. Other information
8. Supplementary information


!!! example "Example Flight Plan"

    ```
    (FPL-HORNET1-IM
        - 1F18/M-DGITUV/CB1
        - URKA1120
        - N0250F090 RUDOL DCT BALEG
        - URKK0024 URKL
        - P/001)
    ```

### Flight Rules and Type of Flight

Flight rules are indicated by a single letter, I or V for IFR or VFR respectively.

In DCS, the type of flight will typically be M for Military but others also exist.

- `S` - Scheduled service
- `N` - Non-scheduled service
- `G` - General aviation
- `M` - Military
- `X` - Anything else

### Aircraft Type & Equipment

The type of an aircraft is indicated by an ICAO type code. Some common ones in DCS are:

- `F18` - F/A-18 Hornet
- `F16` - F-16 Viper
- `F15` - F-15 Eagle
- `HAR` - Harrier
- `A10` - A-10 Warthog
- `C130` - C-130 Hercules
- `MIR2` - Mirage 2000
- `MRF1` - Mirage F1

Equipment codes are used to indicate the equipment on board an aircraft (typically navigation related). Some important ones are:

- `D` - DME (Distance Measuring Equipment)
- `F` - ADF (Automatic Direction Finding)
- `G` - GNSS (Global Navigation Satellite System aka GPS)
- `H` - High Frequency radio
- `I` - Inertial navigation - e.g. INS/IRS
- `L` - ILS (Instrument Landing System)
- `O` - VOR (VHF Omnidirectional Ranging)
- `T` - TACAN (Tactical Air Navigation)
- `U` - Ultra-High Frequency radio
- `V` - Very-High Frequency radio
- `W` - RVSM Approved (Reduced Vertical Separation Minima)
- `Y` - VHF with 8.33kHz channel spacing

Aside from equipment codes, the type of an aircraft's transponder is also stated, the following are the important ones:

- `N` - None
- `A` - Mode A only
- `C` - Mode C only - code and pressure altitude
- `P` - Mode S excluding aircraft identification
- `S` - Mode S

### Cruising Speed, Level and Route

Cruising speed is indicated in True Airspeed (TAS) typically in knots (when preceded by `N`) or km/h (when preceded by `K`). It is always padded to 4 digits.

Cruising Level is indicated either in [Altitude or Flight Level](../general-knowledge/altimetry.md). Altitude in 100s of feet is indicated by preceding with `A`. Flight Level is indicated by preceding with `F`.

Route is a plaintext line indicating the route that the aircraft will follow. When an [IFR](../general-knowledge/flight_rules.md) aircraft will primarily follow airways, it has a defined structure. Starting with a waypoint, then each block of two items indicating the airway to be followed until the next waypoint. If no airway is to be followed, `DCT` indicating direct is used instead.

An example route could be the following: `ADA W84 UMDOT A28 DOREN N131 EMEDA M67 IREFA`

This route indicates that the aircraft will fly to ADA, then fly along W84 until UMDOT, then A28 until DOREN etc.

Waypoints/navaids are typically named according to the following conventions:

- 2 letters - NDB (Non-Directional Beacon) navaid
- 3 letters - VOR, DME or TACAN navaid
- 5 letters - GNSS wapoint

### Other/Supplementary Information

Other/Supplementary Information may include:

**OTHER INFORMATION:**

- `REG/` - aircraft registration (if different from callsign)
- `FFR` - firefighting flight
- `HAZMAT` - flight carrying hazardous materials
- `RMK/` - any remarks

**SUPPLEMENTARY INFORMATION**

- `E/` - fuel endurance (4 digits) e.g. `E/0130`
- `P/` - indicates persons on board (3 digits) e.g. `P/005`
- `R/` - emergency radio:
    - `U` - UHF Radio
    - `V` - VHF Radio
    - `E` - ELT (Emergency Location Transmitter)
- `S/` - Survival equipment:
    - `P` - Polar
    - `D` - Desert
    - `M` - Maritime
    - `J` - Jungle
- `A/` - Aircraft colour and/or markings
