#!/usr/bin/python3
"""Fetches https://alx-intranet.hbtn.io/status."""
import urllib.request

url = 'https://alx-intranet.hbtn.io/status'

with urllib.request.urlopen(url) as response:
    html = response.read()

print('- Body response:\n\t- type: {}\n\t- content: {}\n\t- utf8 content: {}'
      .format(type(html), html, html.decode('utf-8')))
