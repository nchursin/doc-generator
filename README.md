# Document generator

This is a simple service to generate documents by a template.

## Deploy

### Docker

```bash
makedir doc-templates
# put templates in doc-templates dir
npm run docker
```

## Usage

### Template engine

[See here](https://docxtemplater.com/docs/tag-types/)

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
curl -X "PUT" "http://localhost:3000/generate/template_name.docx" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "includeText": false,
  "first_name": "John",
  "last_name": "Doe"
}' -o result.docx

## Generate document from provided docx file
## The following exmaple DOES NOT work AS IS. You need to provide a docx template in the template part of the req
curl -X "POST" "http://localhost:3000/generate" \
     -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__' \
     -F "template=" \
     -F "values={\"first_name\":\"John\",\"last_name\":\"Doe\",\"includeText\":false}"

```
