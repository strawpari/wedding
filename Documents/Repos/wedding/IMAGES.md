# Image Assets

The current implementation uses temporary Figma image URLs that expire in 7 days.

## To Download Images Permanently

1. Download these images from the Figma URLs (or export from Figma):
   - Background image: `cfa2893b-5bde-40c8-9e19-9590c87e6850`
   - Ring image: `0ba9ffa4-185d-439d-87f4-b0bee7e9548f`
   - Names image: `767e7f1b-d436-42bc-9377-ca2d9799ed89`
   - El Capitan photo: `c783545f-dbf9-4890-9656-38dede10f4d2`
   - Us in 2025 photo: `50c8f815-cdec-46de-b089-45c86ae81e6c`

2. Save them to `public/images/` with these names:
   - `bg-image.jpg` (background)
   - `ring.png` (ring overlay)
   - `names.png` (names graphic)
   - `el-capitan-1947.jpg`
   - `us-2025.jpg`

3. Update `src/App.jsx` to use local paths:
   ```jsx
   const bgImage = "/images/bg-image.jpg";
   const ringImage = "/images/ring.png";
   const namesImage = "/images/names.png";
   const elCapitanImage = "/images/el-capitan-1947.jpg";
   const usImage = "/images/us-2025.jpg";
   ```

