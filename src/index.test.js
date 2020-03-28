import {expect} from 'chai';
import JSDOM from 'JSDOM';
import fs from'fs'

describe('Our first test',()=>{
  it('should pass',()=>{
    expect(true).to.equal(true);
  });
});

describe('our index.html',()=>{
  it('should pass',(done)=>{                                                //We're making our asynchronous by passing done as parameter & asking mocha to give us result when it sees done()
    const dom = fs.readFileSync('./src/index.html','utf-8');
    JSDOM.env(dom,(err,window)=>{                                           //Asyncronous call happening here
      const h2 = window.document.getElementsByTagName('h2')[0];
      expect(h2.innerHTML).to.equal("Hello world! Triggered as / was encountered by server from port 3000. / is default request");
      done();                                                               //when done() is called
      window.close();
    });
  });
});



//run command 'npm run test' in terminal to see output
