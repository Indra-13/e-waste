
# from fastapi import FastAPI, File, UploadFile
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# from detection import is_ewaste  # Adjust this import if needed

# app = FastAPI()

# # CORS Middleware Configuration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Update this to your frontend URL if different
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.post("/detect-ewaste/")
# async def detect_ewaste(file: UploadFile = File(...)):
#     image_bytes = await file.read()
#     ewaste_status = is_ewaste(image_bytes)
#     return JSONResponse(content={"isEwaste": ewaste_status})

# from fastapi import FastAPI, File, UploadFile
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# from detection import is_ewaste  # Ensure this import points to your updated function

# app = FastAPI()

# # CORS Middleware Configuration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Update this to your frontend URL if different
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.post("/detect-ewaste/")
# async def detect_ewaste(file: UploadFile = File(...)):
#     image_bytes = await file.read()
#     ewaste_status = is_ewaste(image_bytes)
#     return JSONResponse(content={"isEwaste": ewaste_status})
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from detection import is_ewaste
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)

app = FastAPI()

# CORS Middleware Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update this to your frontend URL if different
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/detect-ewaste/")
async def detect_ewaste(file: UploadFile = File(...)):
    image_bytes = await file.read()
    ewaste_status = is_ewaste(image_bytes)
    logging.debug(f"Image processed. E-Waste detected: {ewaste_status}")
    return JSONResponse(content={"isEwaste": ewaste_status})