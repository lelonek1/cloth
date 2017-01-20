'use strict';

const cp = require('child_process');

const Task = require('../lib/task');

describe('Task', () => {

  describe('constructor', () => {

    it('should set its command', () => {
      const command = 'test';
      new Task(command).command.should.equal(command);
    });
  });
});