# Document generator

This is a simple service to generate documents by a template.

## Deploy

### Docker

```bash
makedir doc-templates
# put templates in doc-templates dir
npm run docker:image && npm run start:docker
```

## Usage

### Environment config

```bash
# port to host the service on
PORT=3000

# folder with templates
TEMPLATE_PATH=./doc-templates
```

### API

```bash
## List templates
curl "http://localhost:3000/templates"

## Generate document
curl -X "POST" "http://localhost:3000/generate/template_name.docx" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "includeText": false,
  "first_name": "John",
  "last_name": "Doe"
}' -o result.docx
```
