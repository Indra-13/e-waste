# import io
# from PIL import Image
# from ultralytics import YOLO

# # Load YOLOv8 model
# model = YOLO('yolov8m.pt')  # Load a pretrained YOLOv8 model

# def is_ewaste(image_bytes):
#     img = Image.open(io.BytesIO(image_bytes)).convert('RGB')
#     results = model(img)
    
#     for result in results:
#         if hasattr(result, 'boxes'):
#             boxes = result.boxes.xyxy.cpu().numpy()
#             confidences = result.boxes.conf.cpu().numpy()
#             classes = result.boxes.cls.cpu().numpy()

#             for box, conf, cls in zip(boxes, confidences, classes):
#                 label = model.names[int(cls)]
#                 if label == 'ewaste' and conf > 0.5:
#                     return False  # Detected as e-waste
import io
import logging
from PIL import Image
from ultralytics import YOLO

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Load YOLOv8 model
model = YOLO('yolov8m.pt')

# Define a list of e-product categories
E_PRODUCT_CATEGORIES = [
    'cell phone', 'tv', 'laptop', 'speakers', 'computer', 'tablet', 'camera', 'monitor'
]

def is_ewaste(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    results = model(img)

    detected_e_product = False

    for result in results:
        if hasattr(result, 'boxes'):
            boxes = result.boxes.xyxy.cpu().numpy()
            confidences = result.boxes.conf.cpu().numpy()
            classes = result.boxes.cls.cpu().numpy()

            for cls, conf in zip(classes, confidences):
                label = model.names[int(cls)]
                logging.debug(f"Detected label: {label}, Confidence: {conf}")

                # Check if the label is in the e-product categories
                if label.lower() in [category.lower() for category in E_PRODUCT_CATEGORIES] and conf > 0.3:
                    detected_e_product = True
                    break
            if detected_e_product:
                break

    logging.debug(f"E-Waste detected: {detected_e_product}")
    return detected_e_product
