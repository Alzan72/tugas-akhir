import logo from './logo.svg';
import './App.css';
import {
  Button,
  Container,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import React, { useState } from "react";


let siswa = [
  {
    id: "12",
    nama: "Tia",
    jk: "P",
    alasan: 'sakit',
    alamat: "Samarinda",
    waktu_pulang: "Senin 2 April 2022",
    waktu_kembali: "Senin 2 April 2022",
    teman_pulang: 'Orang tua',
    button: "",
  },
  {
    id: "23",
    nama: "Tina",
    jk: "P",
    alasan: 'sakit',
    alamat: "Samarinda",
    waktu_pulang: "Senin 2 April 2022",
    waktu_kembali: "Senin 2 April 2022",
    teman_pulang: 'Orang tua',
    button: "",
  },
  {
    id: "32",
    nama: "Tegar",
    jk: "L",
    alasan: 'sakit',
    alamat: "Samarinda",
    waktu_pulang: "Senin 2 April 2022",
    waktu_kembali: "Senin 2 April 2022",
    teman_pulang: 'Orang tua',
    button: "",
  },
];

function App() {
  const [tanggal, setTanggal] = useState(new Date());

  const [listsiswa, setListsiswa] = useState({
    id: "",
    nama: "",
    alamat: "",
    jk: "",
    alasan: "",
    waktu_pulang: '',
    waktu_kembali: '',
    teman_pulang: "",
    button: "",
  });


  let clearState= () =>{
    setListsiswa({
      id: "",
      nama: "",
      alamat: "",
      jk: "",
      alasan: "",
      waktu_pulang: '',
      waktu_kembali: '',
      teman_pulang: "",
      button: "simpan",
    });
  }

   let deleteButton = (data) => {
     let newData = siswa.filter((siswa) => siswa.id !== data);
     siswa = newData;
     clearState();
   };

  let editButton = (data) => {
    let newData = siswa.filter((i) => i.id === data);
    console.log( newData[0].id);
    return setListsiswa({
      id:newData[0].id,
      nama: newData[0].nama,
      alamat: newData[0].alamat,
      teman_pulang: newData[0].teman_pulang,
      alasan: newData[0].alasan,
      waktu_pulang:newData[0].waktu_pulang,
      waktu_kembali:newData[0].waktu_kembali,
      jk: newData[0].jk,
      button: "ubah",
    });
    // console.log(listsiswa);
  };


 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="container">
        <div className="row text-center"><h2>Daftar perizinan santri</h2></div>
        <Button color="danger" onClick={()=>{ toggle()
           clearState() }}>
          Tambah data
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Nama</Label>
                <Input
                  value={listsiswa.nama}
                  id="exampleEmail"
                  name="nama"
                  placeholder="with a placeholder"
                  type="text"
                  onChange={(a) => {
                    console.log(a.target.value);
                   const newListSiswa = { ...listsiswa };
                   newListSiswa.nama = a.target.value;
                   setListsiswa(newListSiswa);

                  }}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Jenis kelamin</legend>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="L"
                    checked={listsiswa.jk == "L"}
                    onClick={(a) => {
                     const newListSiswa = { ...listsiswa };
                     newListSiswa.jk = a.target.value;
                     setListsiswa(newListSiswa);

                    }}
                  />{" "}
                  <Label check>Laki-laki</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="P"
                    checked={listsiswa.jk == "P"}
                    onClick={(a) => {
                     const newListSiswa = { ...listsiswa };
                     newListSiswa.jk = a.target.value;
                     setListsiswa(newListSiswa);

                    }}
                  />{" "}
                  <Label check>Perempuan</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Alamat</Label>
                <Input
                  value={listsiswa.alamat}
                  id="exampleText"
                  name="text"
                  type="textarea"
                  onChange={(a) => {
                    console.log(a.target.value);
                  const newListSiswa = { ...listsiswa };
                  newListSiswa.alamat = a.target.value;
                  setListsiswa(newListSiswa);

                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Teman pulang</Label>
                <select
                  id="exampleSelect"
                  name="select"
                  className='form-select'
                  value={listsiswa.teman_pulang}
                  onChange={(a) => {
                    const newListSiswa = { ...listsiswa };
                    newListSiswa.teman_pulang = a.target.value;
                    setListsiswa(newListSiswa);
                  }}
                >
                  <option value="">PILIH</option>
                  <option>Orang tua</option>
                  <option>Teman</option>
                  <option>Saudara</option>
                  <option>Kerabat</option>
                  <option>Ustadz</option>
                </select>
              </FormGroup>
              <FormGroup>
                <Label >Alasan</Label>
                <Input
                  value={listsiswa.alasan}
                  type="text"
                  onChange={(a) => {
                   const newListSiswa = { ...listsiswa };
                   newListSiswa.alasan = a.target.value;
                   setListsiswa(newListSiswa);
                  }}
                />{" "}
              </FormGroup>

              <FormGroup>
                <Label>Waktu pulang</Label>
                <Input
                placeholder='Hari , tanggal-bulan-tahun Jam:Menit'
                value={listsiswa.waktu_pulang}
                type='text'
                onChange={(a)=>{
                  const newListSiswa = { ...listsiswa };
                  newListSiswa.waktu_pulang = a.target.value;
                  setListsiswa(newListSiswa);
                }}
                />
              </FormGroup>
              <FormGroup>
                <Label>Waktu kembali</Label>
                <Input
                placeholder='Hari , tanggal-bulan-tahun Jam:Menit'
                value={listsiswa.waktu_kembali}
                type='text'
                onChange={(a)=>{
                  const newListSiswa = { ...listsiswa };
                  newListSiswa.waktu_kembali = a.target.value;
                  setListsiswa(newListSiswa);

                }}

                />
              </FormGroup>
              <Button
                onClick={() => {
                  if (listsiswa.button == "ubah") {
                    let data = siswa.findIndex((a) => a.id === listsiswa.id);
                    console.log(data);
                    siswa.splice(data, 1, listsiswa);
                    clearState();
                  } else {
                      const newListSiswa = { ...listsiswa };
                      newListSiswa.id = Math.floor(Math.random() * 10);
                      const siswaBaru = newListSiswa;
                      if (siswaBaru.nama.trim() === "") {
                        alert("Nama harus diisi");
                      } else {
                        siswa.push(siswaBaru);
                        clearState();
                        console.log(siswaBaru);
                      }
                      setListsiswa(newListSiswa); 
                  }
                }}
              >
                Submit
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>

        <Table bordered borderless hover responsive size="sm" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
              <th>Alasan</th>
              <th>Waktu pulang</th>
              <th>Waktu kembali</th>
              <th>Teman pulang</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((list, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{list.nama}</td>
                  <td>{list.alamat}</td>
                  <td>{list.jk}</td>
                  <th>{list.alasan}</th>
                  <th>{list.waktu_pulang}</th>
                  <th>{list.waktu_kembali}</th>
                  <th>{list.teman_pulang}</th>
                  <td>
                    <Button
                      color="success"
                      onClick={() => {
                        editButton(list.id);
                        toggle();
                      }}
                    >
                      Edit 
                    </Button>
                    |{" "}
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteButton(list.id);
                      }}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );

}

export default App;
