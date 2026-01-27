#!/bin/bash

# Script to convert framer-motion imports to LazyMotion
# Usage: ./scripts/convert-to-lazymotion.sh <file-path>

FILE=$1

if [ -z "$FILE" ]; then
  echo "Usage: $0 <file-path>"
  exit 1
fi

if [ ! -f "$FILE" ]; then
  echo "File not found: $FILE"
  exit 1
fi

echo "Converting $FILE to LazyMotion..."

# Backup
cp "$FILE" "$FILE.bak"

# Replace motion import
sed -i '' 's/import { motion } from "framer-motion";/import { LazyMotion, domAnimation, m } from "framer-motion";/g' "$FILE"

# Replace all motion. with m.
sed -i '' 's/motion\./m./g' "$FILE"

# Add LazyMotion wrapper after export function line
# This is more complex and may need manual adjustment

echo "✓ Converted $FILE"
echo "  - Updated imports"
echo "  - Replaced motion. with m."
echo "  - Please manually add <LazyMotion features={domAnimation} strict> wrapper"
echo ""
echo "Backup saved to $FILE.bak"
