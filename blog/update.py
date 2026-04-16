import os
import re

blog_path = r"c:\Users\admin\Desktop\blog"

def process_file(f_name):
    file_path = os.path.join(blog_path, f_name)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace Unsplash and Picsum images with loading.svg
        content = re.sub(r'https://picsum\.photos/[^\"]+', 'loading.svg', content)
        content = re.sub(r'https://images\.unsplash\.com/[^\"]+', 'loading.svg', content)
        
        # For script.js specifically matching property assignments
        if f_name == 'script.js':
            content = re.sub(r'image:\s*"https://[^"]+"', 'image: "loading.svg"', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {f_name}")

for f in ['index.html', 'script.js', 'blog-detail.html', 'blog-detail-new.html', 'privacy-policy.html']:
    process_file(f)

print("Done replacing image links with loading.svg")
