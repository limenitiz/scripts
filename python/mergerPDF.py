from pypdf import PdfMerger

pdfs = ['1.pdf', '2.pdf']

merger = PdfMerger()

for pdf in pdfs:
    merger.append(pdf)

merger.write("1-2.pdf")
merger.close()
