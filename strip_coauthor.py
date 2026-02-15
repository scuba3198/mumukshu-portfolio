#!/usr/bin/env python3
import re

def commit_callback(commit, metadata):
    """Remove Co-Authored-By trailers from commit messages."""
    if commit.message:
        # Convert bytes to string for regex
        message_str = commit.message.decode('utf-8')
        # Remove Co-Authored-By lines
        cleaned = re.sub(r'\n?Co-Authored-By:.*', '', message_str)
        # Convert back to bytes
        commit.message = cleaned.encode('utf-8')
