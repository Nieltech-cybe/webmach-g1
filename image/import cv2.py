import cv2
import numpy as np
from matplotlib import pyplot as plt

# Load the image
image = cv2.imread('image.jpg')

# Smoothing (Blurring) the image
# You can use different smoothing methods. Here are a few common ones:
    
# 1. Gaussian Blur
gaussian_blur = cv2.GaussianBlur(image, (5, 5), 0)

# 2. Median Blur
median_blur = cv2.medianBlur(image, 5)

# 3. Bilateral Filter
bilateral_blur = cv2.bilateralFilter(image, 9, 75, 75)

# Sharpening the image
# Creating a kernel for sharpening
kernel = np.array([[0, -1, 0],
                   [-1, 5, -1],
                   [0, -1, 0]])
sharpened_image = cv2.filter2D(image, -1, kernel)

# Display the results
plt.figure(figsize=(12, 8))

plt.subplot(2, 3, 1)
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.title('Original Image')

plt.subplot(2, 3, 2)
plt.imshow(cv2.cvtColor(gaussian_blur, cv2.COLOR_BGR2RGB))
plt.title('Gaussian Blur')

plt.subplot(2, 3, 3)
plt.imshow(cv2.cvtColor(median_blur, cv2.COLOR_BGR2RGB))
plt.title('Median Blur')

plt.subplot(2, 3, 4)
plt.imshow(cv2.cvtColor(bilateral_blur, cv2.COLOR_BGR2RGB))
plt.title('Bilateral Filter')

plt.subplot(2, 3, 5)
plt.imshow(cv2.cvtColor(sharpened_image, cv2.COLOR_BGR2RGB))
plt.title('Sharpened Image')

plt.tight_layout()
plt.show()
