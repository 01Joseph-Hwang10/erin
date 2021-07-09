# Vulnerabilities

## High

### css-what

React native svg uses this library as dependency.

#### Overview(css-what)

**css-what before 5.0.1 does not ensure that attribute parsing has Linear Time Complexity relative to the size of the input.**

## Low

### node-fetch

expo, expo updates, react-native, metro-config uses this library as dependency.

#### Overview(node-fetch)

Node Fetch did not honor the size option after following a redirect, which means that when a content size was over the limit, a FetchError would never get thrown and the process would end without failure.

**For most people, this fix will have a little or no impact.** However, if you are relying on node-fetch to gate files above a size, the impact could be significant, for example: If you don't double-check the size of the data after fetch() has completed, your JS thread could get tied up doing work on a large file (DoS) and/or cost you money in computing.
