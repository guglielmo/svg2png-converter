Node JS basic HTTP server on port 8888, that converts an svg stream, passed as POST, into a PNG image.

Instructions
============

To install (debian squeeze)::
    
    apt-get install librsvg-dev imagemagick
    apt-get install git-core curl build-essential openssl libssl-dev

    git clone https://github.com/joyent/node.git
    cd node
  
    # 'git tag' shows all available versions: select the latest stable.
    git checkout v0.8.9
 
    # Configure seems not to find libssl by default so we give it an explicit pointer.
    # Optionally: you can isolate node by adding --prefix=/opt/node
    ./configure --openssl-libpath=/usr/lib/ssl
    make
    make test
    sudo make install
    node -v # it's alive!
    npm -v # it's alive!


To run::

    node converter.js


To convert::

   curl -X POST -d @graph.svg http://thehost:8888/ > graph.png


Notes
=====
Conversion is rather raw, yet. It does not take into account size, quality, transparency.
Have to look into imagemagick and the librsvg library to take care of it.



Instructions and inspirations
=============================
* http://eng.wealthfront.com/2011/12/converting-dynamic-svg-to-png-with.html
* https://sekati.com/etc/install-nodejs-on-debian-squeeze
* http://stackoverflow.com/questions/4295782/node-js-extracting-post-data

