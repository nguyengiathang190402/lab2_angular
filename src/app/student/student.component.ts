import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Thắng';
  thang = 'Bảng dữ liệu';

  student = {
    name: 'thangng',
    age: 20,
    phone: '0338524044',
    email: 'thangng@gmail.com',
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'
  };

  students = [
    {
    id: 1,
    name: 'thangng',
    age: 20,
    phone: '0338524044',
    email: 'thangng@gmail.com',
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'
  },
  {
    id: 2,
    name: 'Thắng vĩ đại',
    age: 20,
    phone: '0338524044',
    email: 'thangng@gmail.com',
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'
  },
  {
    id: 3,
    name: 'Thắng năm bơ oăn',
    age: 20,
    phone: '0338524044',
    email: 'thangng@gmail.com',
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'
  },
];


  users = [
  {
    id: 1,
    name: 'Thắng năm bơ oăn',
    height: '1m76',
    kg: 29,
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'

  },
  {
    id: 2,
    name: 'Thắng năm bơ tu',
    height: '1m95',
    kg: 90,
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'

  },
  {
    id: 3,
    name: 'Thắng năm bơ tuy',
    height: '1m67',
    kg: 20,
    img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'

  },
  {
      id: 4,
      name: 'Thắng năm bơ pho',
      height: '1m80',
      kg: 30,
      img: 'https://f2.photo.talk.zdn.vn/2061815924219505692/d969e38c92375e690726.jpg'
  
    },
];
      remove(id :number) {
        
        const users = this.users.filter(user => user.id == id)
        

        if(users[0].kg > 30){
          this.users = this.users.filter(user => user.id !== id);
        }else{
          alert("Cân nặng < 30 không pé ơi")
        }

      };
      //search
      searchValue = '';
      // spread, lấy tất cả phân tử của user đưa vào 1 mảng mới và gắn cho filterUsers
      filterUsers =  this.users;
      

      onSearch(event :any){
      this.searchValue = event.target.value;

      this.filterUsers = this.users.filter(user => { 
        const UserNameLowerCase = user.name.toLowerCase();
        const searchValueLowerCase = this.searchValue.toLowerCase().trim();
        return UserNameLowerCase.indexOf(searchValueLowerCase) !== -1
      }
        );

      
      }
    // form input
       newUser = {
        id: 0,
        name: '',
        height: '',
        kg: 0,
        img: '',

      };
      onChangeInput(event: any, key: string,){
        const inputValue = event.target.value;

        this.newUser = {
          ...this.newUser,
          [key]: inputValue
        };
      }
      onSubmit() {
        if (!this.onValidate(this.newUser)) {
          //nếu không pass qua đk validate, thì returrn khỏi hàm submit luôn
          return;
        }
        if (this.newUser.id) {
          // Neu co id thi se la cong viec chinh sua
          // Tim xem dau la phan tu co id la id dang duoc chinh sua
          for (let i = 0; i < this.users.length; i++) {
            // Kiem tra phan tu nao co id trung voi id cua du lieu chinh sua
            if (this.users[i].id === this.newUser.id) {
              // Khi tim thay thi gan gia tri cho phan tu do
              this.users[i] = this.newUser;
            }
          }
        } else {
        this.newUser = {
          ...this.newUser,
          id: this.users.length + 1,
          kg: Number(this.newUser.kg)

        };
        this.users.push(this.newUser);
      }
    }
      onValidate(obj :any) {
      if (!obj.name || !obj.height || !obj.kg || !obj.img) {
        return false;
      }
      return true;
      }
      onEdit(user: any) {
        this.newUser = user;
      }
}
