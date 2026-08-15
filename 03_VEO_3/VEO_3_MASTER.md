# Sanyo Yusoki Vietnam — VEO 3 Master

## 1. Purpose

VEO 3 Master is the video-generation execution layer of the Sanyo AI Automation system.

It transforms an approved Video Brief into a structured visual-generation specification.

Architecture:

01_CORE
→ 02_VIDEO_BRIEF
→ 03_VEO_3
→ 04_PROMPTS
→ 05_ASSETS
→ 06_N8N
→ 07_WORKFLOWS
→ 08_OUTPUT

The VEO 3 layer answers:

HOW should the approved story be generated visually?

It must not redefine:

- Brand strategy
- Customer strategy
- Core messaging
- Product claims
- Customer insight

Those remain controlled by 01_CORE and 02_VIDEO_BRIEF.

---

## 2. Input

Required input:

- Approved Video Brief
- Customer problem
- Customer insight
- Big idea
- Hook
- Story structure
- Scene plan
- Voice direction
- CTA
- Product information
- Approved assets

Optional input:

- Existing reference images
- Existing video
- Character reference
- Architecture reference
- Product reference
- Location reference
- Campaign reference

---

## 3. Output

The VEO 3 layer produces:

- Scene generation specification
- Character specification
- Environment specification
- Camera specification
- Lighting specification
- Motion specification
- Dialogue specification
- Audio specification
- Text specification
- Continuity constraints
- Negative constraints
- Quality-control requirements

---

## 4. Master Principle

The generated video must preserve the intent of the approved Video Brief.

Priority order:

1. Customer truth
2. Story clarity
3. Product accuracy
4. Visual continuity
5. Brand consistency
6. Cinematic quality

Do not sacrifice customer clarity for cinematic effects.

---

## 5. Generation Philosophy

The system should create videos that feel:

- Real
- Human
- Premium
- Calm
- Trustworthy
- Contemporary
- Architecturally credible
- Technically believable

Avoid:

- Artificial advertising feel
- Excessive visual effects
- Impossible architecture
- Unrealistic elevator movement
- Exaggerated facial expressions
- Fake technical details
- Unsupported product claims
- Overly dramatic commercial language

---

## 6. Prompt Architecture

Each scene prompt should contain:

SUBJECT
+ ENVIRONMENT
+ ACTION
+ CAMERA
+ LIGHTING
+ MOTION
+ AUDIO
+ DIALOGUE
+ TEXT
+ STYLE
+ CONTINUITY
+ CONSTRAINTS

The prompt should describe what must happen, not merely describe a beautiful image.

---

## 7. Scene Independence

Each scene must be understandable on its own.

However, consecutive scenes must preserve:

- Character identity
- Clothing
- Age appearance
- Architecture
- Time of day
- Lighting logic
- Elevator geometry
- Spatial orientation
- Object placement
- Visual style

---

## 8. Scene Duration

Use the duration specified by the Video Brief.

Typical short-form scenes:

- 3 seconds
- 5 seconds
- 6 seconds
- 8 seconds
- 10 seconds

Do not force every scene into the same duration.

---

## 9. Scene Prompt Structure

Each scene should follow:

### Scene ID

### Purpose

Why does this scene exist?

### Subject

Who or what is the viewer looking at?

### Environment

Where does the scene occur?

### Action

What physically happens?

### Camera

How does the camera observe the action?

### Lighting

What is the light source and mood?

### Motion

What moves?

### Voice

What is spoken?

### On-screen Text

What appears on screen?

### Audio

What should the audience hear?

### Continuity

What must remain consistent?

### Constraints

What must not happen?

---

## 10. Camera System

Preferred camera directions:

- Static
- Slow push-in
- Slow pull-out
- Tracking
- Pan
- Tilt
- Close-up
- Medium shot
- Wide shot
- Over-the-shoulder
- Detail shot
- Establishing shot

Camera movement must support the story.

Avoid unnecessary movement.

---

## 11. Composition

Use composition to direct attention.

Examples:

Wide shot:
Establish architecture and spatial context.

Medium shot:
Show human interaction.

Close-up:
Show emotion or technical detail.

Detail shot:
Show product finish, control panel, material or mechanism.

Over-the-shoulder:
Create a natural human perspective.

---

## 12. Camera Continuity

When moving between scenes:

- Preserve screen direction
- Preserve spatial relationships
- Preserve room orientation
- Preserve character position when practical
- Avoid unexplained camera jumps

A viewer should understand where they are.

---

## 13. Lighting System

Default visual lighting:

- Natural daylight
- Soft architectural lighting
- Warm residential evening light
- Clean showroom lighting
- Realistic site lighting

Lighting should support:

- Trust
- Comfort
- Premium quality
- Architectural clarity

Avoid:

- Excessive neon
- Unrealistic glow
- Overly dark scenes
- Artificial lens effects

---

## 14. Character System

Characters must be defined by:

- Approximate age
- Gender presentation when relevant
- Role
- Clothing
- Hair
- Physical posture
- Emotional state
- Relationship to other characters

Character continuity is mandatory across related scenes.

---

## 15. Character Behavior

Human behavior should be subtle and believable.

Prefer:

- Natural walking
- Natural conversation
- Small gestures
- Realistic eye movement
- Appropriate facial expression
- Normal interaction with architecture

Avoid:

- Overacting
- Commercial-model posing
- Exaggerated smiles
- Unnatural hand gestures
- Robotic movement

---

## 16. Family Representation

When depicting Vietnamese family life:

Use believable multi-generation situations.

Examples:

- Grandparents
- Parents
- Children
- Family conversations
- Daily movement
- Renovation decisions
- Home routines

The family should feel like a real household rather than a staged advertisement.

---

## 17. Architecture System

Architecture must remain physically coherent.

Preserve:

- Floor count
- Stair position
- Walls
- Doors
- Windows
- Elevator shaft
- Landing
- Cabin position
- Ceiling height
- Floor relationships

Do not create impossible geometry.

---

## 18. Narrow House / Townhouse

For Vietnamese narrow houses:

Show realistic characteristics when relevant:

- Narrow frontage
- Deep floor plan
- Vertical circulation
- Staircase
- Multiple floors
- Limited usable area
- Existing structural constraints

Do not exaggerate dimensions.

---

## 19. Elevator Geometry

Elevator scenes must preserve:

- Cabin shape
- Door orientation
- Door position
- Shaft relationship
- Landing relationship
- Vertical travel direction
- Floor alignment

The cabin must not visually change size between shots without a reason.

---

## 20. Product Accuracy

Use approved reference assets whenever available.

If an exact product reference is supplied:

Preserve:

- Shape
- Materials
- Door configuration
- Control panel
- Cabin layout
- Handrail
- Ceiling
- Lighting
- Finish

Do not invent technical components.

---

## 21. Technical Claims

VEO generation must not create visual evidence for unsupported claims.

Examples of prohibited fabrication:

- Fake certifications
- Fake test results
- Fake safety labels
- Fake specifications
- Fake engineering drawings
- Fake awards
- Fake project statistics

If a technical statement is not verified, do not visually imply that it is verified.

---

## 22. Motion System

Elevator movement should be physically believable.

Preferred:

- Smooth acceleration
- Smooth deceleration
- Vertical movement
- Door opening and closing consistent with the scene
- Realistic passenger movement

Avoid:

- Floating cabins
- Sudden teleportation
- Impossible door movement
- Cabin passing through floors
- People clipping through doors
- Objects changing position without cause

---

## 23. Physics

All generated scenes should respect basic physical reality.

Check:

- Gravity
- Contact
- Shadows
- Reflections
- Object scale
- Human proportions
- Door movement
- Elevator movement
- Walking direction

Cinematic style must not override physical coherence.

---

## 24. Voice System

Default voice:

- Vietnamese
- Natural
- Calm
- Intelligent
- Trustworthy
- Helpful
- Expert but not arrogant

Voice should sound like a knowledgeable person speaking to a customer.

---

## 25. Dialogue

Dialogue should be conversational Vietnamese.

Prefer:

"Nhà mình chỉ rộng khoảng 40 mét vuông, liệu có làm được thang máy không?"

Avoid overly formal advertising language.

Do not make characters speak technical specifications unless the scene requires it.

---

## 26. Lip Sync

When dialogue is visible:

- Mouth movement should correspond naturally to speech.
- Avoid excessive mouth movement.
- Avoid distorted lips.
- Avoid simultaneous speaking by multiple characters unless explicitly required.

If exact lip sync cannot be guaranteed, prefer voice-over.

---

## 27. Voice-over

Voice-over is preferred when:

- The video is educational
- The scene is architectural
- Technical explanation is required
- Product detail is being shown
- Dialogue would reduce clarity

Visuals should illustrate the narration.

---

## 28. Audio System

Audio layers:

1. Voice
2. Natural ambience
3. Sound effects
4. Music

Voice must remain intelligible.

Music must not overpower narration.

---

## 29. Music

Preferred:

- Subtle
- Modern
- Warm
- Premium
- Emotional when appropriate

Avoid:

- Overly dramatic music
- Aggressive advertising music
- Music that changes the emotional meaning of the scene

---

## 30. On-Screen Text

Text should be:

- Short
- Readable
- Accurate
- Relevant

Use text for:

- Key insight
- Important question
- Checklist
- Main conclusion
- CTA

Do not cover important product details.

---

## 31. Subtitle System

Default:

Vietnamese subtitles.

Subtitles should:

- Match the spoken meaning
- Remain readable
- Avoid excessive words per line
- Maintain timing with voice

---

## 32. Brand System

Brand presence should support trust.

Possible elements:

- Sanyo Yusoki logo
- Brand name
- Approved slogan
- Showroom
- Product identity
- Staff uniform
- Approved visual assets

Do not force branding into every shot.

---

## 33. Brand Tone

The visual language should communicate:

Japanese-inspired precision
+
Human warmth
+
Engineering credibility
+
Long-term reliability
+
Customer care

Do not use stereotypes or exaggerated "Japanese" visual clichés.

---

## 34. Negative Prompt System

Use constraints appropriate to the scene.

Typical constraints:

No distorted faces.
No extra fingers.
No duplicated people.
No floating objects.
No impossible architecture.
No warped elevator cabin.
No changing door position.
No inconsistent clothing.
No changing character identity.
No impossible reflections.
No unreadable fake text when text is not required.
No unsupported technical labels.
No fake certifications.
No excessive cinematic effects.

---

## 35. Continuity Lock

When a scene belongs to the same sequence, lock:

CHARACTER
WARDROBE
LOCATION
ARCHITECTURE
TIME
LIGHTING
PRODUCT
CAMERA LANGUAGE
COLOR MOOD
SPATIAL RELATIONSHIP

---

## 36. Reference Priority

When references are supplied, priority is:

1. Approved product reference
2. Approved architectural reference
3. Approved character reference
4. Approved brand asset
5. Video Brief
6. Creative interpretation

Creative interpretation must never contradict approved references.

---

## 37. Image-to-Video Principle

When starting from a reference image:

Preserve:

- Subject identity
- Architecture
- Product geometry
- Material appearance
- Camera perspective

Animate only what the brief requires.

Avoid unnecessary transformations.

---

## 38. Text-to-Video Principle

When no reference image exists:

Generate from the approved scene specification.

The system must prioritize:

- Correct composition
- Correct subject
- Correct environment
- Correct action
- Correct camera
- Correct continuity

before decorative detail.

---

## 39. Multi-Scene Workflow

For each video:

Step 1:
Read Video Brief.

Step 2:
Extract customer insight.

Step 3:
Extract Big Idea.

Step 4:
Extract Hook.

Step 5:
Extract scene list.

Step 6:
Create continuity profile.

Step 7:
Generate scene specifications.

Step 8:
Generate VEO prompts.

Step 9:
Run visual quality gate.

Step 10:
Revise failed scenes.

Step 11:
Assemble approved scenes.

Step 12:
Hand off to 08_OUTPUT.

---

## 40. Continuity Profile

Before generating scenes, create:

Character Profile
Environment Profile
Product Profile
Lighting Profile
Camera Profile
Audio Profile

These profiles are reused across scenes.

---

## 41. Scene Prompt Template

SCENE ID:
Duration:

PURPOSE:

SUBJECT:

ENVIRONMENT:

ACTION:

CAMERA:

COMPOSITION:

LIGHTING:

MOTION:

VOICE:

DIALOGUE:

ON-SCREEN TEXT:

AUDIO:

STYLE:

CONTINUITY:

NEGATIVE CONSTRAINTS:

QUALITY CHECK:

---

## 42. Prompt Quality

A strong prompt should answer:

Who?
Where?
What?
How?
Why?
What must remain unchanged?
What must not happen?

If any critical answer is missing, improve the prompt before generation.

---

## 43. Production Priority

When trade-offs occur:

1. Correct story
2. Correct customer context
3. Correct product
4. Correct architecture
5. Correct character
6. Correct movement
7. Visual polish

---

## 44. Quality Gate

Before accepting a generated scene:

### Story
Does the scene communicate its intended purpose?

### Character
Is identity consistent?

### Architecture
Is the space physically believable?

### Product
Is the elevator visually correct?

### Motion
Is movement realistic?

### Camera
Does camera movement support the story?

### Audio
Is voice clear?

### Text
Is visible text accurate?

### Brand
Does the scene fit Sanyo Yusoki?

### Safety
Does the scene avoid misleading or unsafe implications?

---

## 45. Failure Handling

If a scene fails:

Do not randomly regenerate with the same prompt.

Identify the failure:

- Character
- Architecture
- Product
- Motion
- Camera
- Lighting
- Text
- Voice
- Continuity

Then revise only the failed component when possible.

---

## 46. Versioning

Version format:

vMAJOR.MINOR

Minor:
- Prompt wording
- Camera adjustment
- Timing
- Lighting adjustment
- Audio adjustment

Major:
- New visual system
- New continuity architecture
- New generation strategy

---

## 47. Handoff to 04_PROMPTS

03_VEO_3 defines the generation logic.

04_PROMPTS stores reusable prompt templates.

The VEO layer must not become a random prompt library.

---

## 48. Handoff to 05_ASSETS

Assets required by VEO should be explicitly identified:

- Product images
- Cabin images
- Logo
- Architecture images
- Staff images
- Showroom images
- Project images
- Reference videos

---

## 49. Handoff to N8N

Future automation may:

Input:
Approved Video Brief

Process:
Generate continuity profile
→ Generate scenes
→ Generate prompts
→ Quality gate
→ Store outputs

Output:
Structured VEO generation package.

---

## 50. Master Rule

VEO 3 is an execution engine.

It does not invent the strategy.

It does not invent product facts.

It does not invent customer insights.

It converts approved creative intent into controlled visual instructions.

---

## 51. Status

System Layer:
03_VEO_3

Master:
VEO_3_MASTER

Version:
v1.0

Status:
Foundation
