import chai from 'chai';
import { StudentController } from '../../src/controller/StudentController';
import type { StudentJSON } from '../../src/data';
import {Student} from '../../src/model/Student'

import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;

describe('StudentControllerTest', () => {
  
  it('must login', () => {
    let controller: StudentController = new StudentController();
    let teacher = controller.login("first_name.last_name+1@gmail.com", "unknown");
    expect(teacher.token).to.equal('e649905a37aa58c397647862118e3474');
    expect(teacher.user.id).to.equal("first_name.last_name+1@gmail.com");
  })
  
  it('must fail to login', () => {
    let controller: StudentController = new StudentController();
    expect(() => { controller.login("teacher+100@gmail.com", "unknown"); }).to.throw('Email and password do not match student')
  })

  it('get all students', () => {
    let controller: StudentController = new StudentController();
    expect(controller.all().length).to.equal(100)
  })

});