#!/bin/bash

# Boxing Timer Champ - Image Optimization Script
# This script optimizes images for the website by:
# 1. Resizing them to a maximum width of 1200px
# 2. Optimizing JPG/PNG compression
# 3. Moving them to the appropriate directory
# 4. Creating WebP versions for modern browsers

# Usage: ./optimize-images.sh <image_path> <output_directory> [custom_filename]
# Example: ./optimize-images.sh my-image.jpg blog
# Example with custom filename: ./optimize-images.sh my-image.jpg blog custom-name

# Text colors for better readability
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Check if sips is available (macOS)
if ! command -v sips &> /dev/null; then
    echo -e "${RED}Error: sips command not found. This script requires macOS.${NC}"
    exit 1
fi

# Check arguments
if [ $# -lt 2 ]; then
    echo -e "${YELLOW}Usage: $0 <image_path> <output_directory> [custom_filename]${NC}"
    echo -e "${YELLOW}Example: $0 my-image.jpg blog${NC}"
    echo -e "${YELLOW}Example with custom filename: $0 my-image.jpg blog custom-name${NC}"
    exit 1
fi

IMAGE_PATH=$1
OUTPUT_DIR=$2
FILENAME=$(basename "$IMAGE_PATH")
EXTENSION="${FILENAME##*.}"
FILENAME_NO_EXT="${FILENAME%.*}"

# Use custom filename if provided
if [ $# -ge 3 ]; then
    CUSTOM_NAME=$3
    OUTPUT_FILENAME="${CUSTOM_NAME}.${EXTENSION}"
    echo -e "${BLUE}Using custom filename: $OUTPUT_FILENAME${NC}"
else
    OUTPUT_FILENAME=$FILENAME
fi

OUTPUT_PATH="public/images/$OUTPUT_DIR/$OUTPUT_FILENAME"
WEBP_OUTPUT_PATH="public/images/$OUTPUT_DIR/${OUTPUT_FILENAME%.*}.webp"

# Create directory if it doesn't exist
mkdir -p "public/images/$OUTPUT_DIR"

# Copy the image to the output directory
cp "$IMAGE_PATH" "$OUTPUT_PATH"

# Resize image to max width of 1600px while maintaining aspect ratio and preserving quality
echo -e "${BLUE}Resizing image to max width of 1600px with high quality...${NC}"
# Use sips with higher quality settings
sips -Z 1600 "$OUTPUT_PATH" --out "$OUTPUT_PATH"

# Create WebP version if sips supports it (macOS 12+)
if sips -s format webp "$OUTPUT_PATH" --out "$WEBP_OUTPUT_PATH" 2>/dev/null; then
    echo -e "${GREEN}WebP version created: $WEBP_OUTPUT_PATH${NC}"
    echo -e "${YELLOW}WebP path for code: /images/$OUTPUT_DIR/${OUTPUT_FILENAME%.*}.webp${NC}"
else
    echo -e "${YELLOW}WebP conversion not supported on this version of macOS.${NC}"
fi

# Get image dimensions
WIDTH=$(sips -g pixelWidth "$OUTPUT_PATH" | grep -o '[0-9]*' | tail -1)
HEIGHT=$(sips -g pixelHeight "$OUTPUT_PATH" | grep -o '[0-9]*' | tail -1)

echo -e "${GREEN}Image optimized and saved to: $OUTPUT_PATH${NC}"
echo -e "${GREEN}Dimensions: ${WIDTH}x${HEIGHT}px${NC}"
echo -e "${YELLOW}Path for code: /images/$OUTPUT_DIR/$OUTPUT_FILENAME${NC}"

# Generate HTML example with srcset for responsive images
echo -e "\n${BLUE}HTML Example:${NC}"
echo -e "<img src=\"/images/$OUTPUT_DIR/$OUTPUT_FILENAME\" \
     alt=\"Description of the image\" \
     width=\"$WIDTH\" height=\"$HEIGHT\" \
     loading=\"lazy\" />"
