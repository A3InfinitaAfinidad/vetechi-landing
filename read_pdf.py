import sys
from pypdf import PdfReader

sys.stdout.reconfigure(encoding='utf-8')

print("Reading first PDF...")
try:
    reader1 = PdfReader('VETECHI_Documentacion_Institucional_2026.pdf')
    text1 = ""
    for page in reader1.pages:
        text1 += page.extract_text() + "\n"
    print("--- VETECHI_Documentacion_Institucional_2026.pdf ---")
    print(text1)
except Exception as e:
    print("Error reading first PDF:", e)

print("\n\n======================================================\n\n")

print("Reading second PDF...")
try:
    reader2 = PdfReader('VETECHI · Hospital Veterinario Chiriquí · Emergencias 24_7.pdf')
    text2 = ""
    for page in reader2.pages:
        text2 += page.extract_text() + "\n"
    print("--- VETECHI · Hospital Veterinario Chiriquí · Emergencias 24_7.pdf ---")
    print(text2)
except Exception as e:
    print("Error reading second PDF:", e)
