# Transponder Operation

## Transponder Codes

Transponder codes are encoded in [octal (base 8)](https://en.wikipedia.org/wiki/Octal), and thus only fit the range `0-7`. This means any squawk given with an `8` or `9` in it, is invalid and will not be accepted by your transponder.

## LotAtc

### Labels

 ![Mode 3 filtered transponder label](../assets/pilot-guide/transponder/lotatc_label_mode3.webp)

`%(transponder)` can be added to label html to display the current transponder. You can select only the mode 3 portion of the transponder code by using `%(transponder|mode3)`.

Example HTML with Transponder Mode 3:

```html
%(name|10)
%(transponder|mode3)
%(alti_short) %(type)
```

### IDENT

 ![IDENT Lotatc demonstration animation](../assets/pilot-guide/transponder/lotatc_ident.webp)

 A controller or C2 may elect to ask for a pilot to IDENT, which will highlight them with a flashing red border in LotAtc. This can be useful for doing checkins/alpha checks, as it highlights the aircraft's position without having to find them in the object menu, or look for their alpha check manually.

### Emergency Codes

 ![Emergency squawk LotAtc demonstration animation](../assets/pilot-guide/transponder/lotatc_7700.webp)

When squawking `7700` or `7600`, the relevant aircraft will be highlighted by a red block which flashes periodically. 

![Emergency squawk LotAtc label](../assets/pilot-guide/transponder/lotatc_label_emer.webp)

Their mode 3 transponder label will also read `EMER` if `7700` or `RDO` if `7600` is selected by the pilot.

## F/A 18C Hornet

### Mode 3 Transponder

 ![Mode 3 IFF demonstration animation](../assets/pilot-guide/transponder/fa18_iff_mode_3.webp)

#### Walkthrough

1. Press the `IFF` button on the **UFC**.
2. Press the `On/Off` switch on the **UFC** if you do not see the mode options populated.
3. Press the `3 C` option button on the **UFC**, to select the mode 3 configuration for editing.
4. Input your designated or desired SQUAWK.
5. Press `ENT`.

#### Checklist

```
IFF ..... ON
Mode 3C ..... ON
Mode 3C ..... CODE
```

### IDENT

 ![I/P pushbutton location](../assets/pilot-guide/transponder/fa18_ident.webp)

#### Walkthrough

1. Press the `I/P` pushbutton on the **UFC**.

*You do not need to hold this down for operation.*

#### Checklist

```
IFF ..... ON
Mode 3C ..... ON
I/P Pushbutton ..... HOLD 1 SECOND
```

## Mirage F1

### Mode 3 Transponder

 ![Mode 3 IFF Demonstration Animation](../assets/pilot-guide/transponder/f1_transponder_setup.webp)

#### Walkthrough

1. Locate the IFF control panel.
2. Set the IFF Master knob to standby.
3. Enter your SQUAWK into the Mode 3A section using the number rollers.
4. Set the `Mode 1/2/3A/C` to on.
5. Set the `Mode 4 "Password" Knob` to A or B depending on preference. Default to `A`.
6. Set the `Mode 4 Switch` to on.
7. Before taking off, or at ATC request, set the `IFF Master` switch to on.


#### Checklist

During Start:

```
- IFF Master Knob ..... STBY
- Mode 1 ..... Code
- Mode 3 ..... Code
- Mode 1 / 2 / 3A / C Switch .... ON
- Mode 4 "Password" Knob ..... A / B
- Mode 4 Switch..... ON
```

Before Takeoff:

```
IFF Master Knob ..... N
```

### IDENT

 ![](../assets/pilot-guide/transponder/f1_ident.webp)

#### Walkthrough

1. Hold the Position/Identification switch in the up position to IDENT.

#### Checklist

```
Position/Identification Switch .... HOLD UP
```

