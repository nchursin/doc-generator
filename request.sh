curl -X "POST" "http://localhost:3000/generate/1.docx" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "includeText": false,
  "phone": "+1 123 321 12 32",
  "description": "Test document for generation from template",
  "first_name": "John",
  "last_name": "Doe"
}' -o result.docx
