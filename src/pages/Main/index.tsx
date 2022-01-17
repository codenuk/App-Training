import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import axios from 'axios'
import NavTopBarComponent from '../../component/NavTopBar'
import ButtonComponent from '../../component/Button'
import AllLevelSVG from './images/allLevel.svg'
import Level1SVG from './images/level1.svg'
import Img1SVG from './images/img1.svg'
import { BASE_URL } from '../../adapter/xhr/restAPI'

const MainPage: React.FC = (): JSX.Element => {
  const [values, setValues] = useState<any>({
    id: null,
    date_entry: '',
    charge_nurse: '',
    goal_for_today: '',
    face_pain_rating: '',
    precaution: '',
    special_needs: '',
    comment: '',
    any_question: '',
    created_at: '',
    updated_at: '',
  })
  const [mode, setMode] = useState('view') // view, edit
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (mode === 'view') {
      axios
        .get(`${BASE_URL}/information`)
        .then(function (res: any) {
          setValues({
            ...res.data,
            date_entry: res.data.date_entry.split('T')[0],
          })
        })
        .catch(function (err: any) {
          console.log(err)
        })
    }
  }, [mode, seconds])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/updateInfomation`, {
        date_entry: values.date_entry,
        charge_nurse: values.charge_nurse,
        goal_for_today: values.goal_for_today,
        face_pain_rating: values.face_pain_rating,
        precaution: values.precaution,
        special_needs: values.special_needs,
        comment: values.comment,
        any_question: values.any_question,
      })
      .then(function (res: any) {
        console.log(res)
        setMode('view')
      })
      .catch(function (err: any) {
        console.log(err.response)
      })
  }

  return (
    <div className="layout-main">
      <div className="header">
        <NavTopBarComponent />
      </div>
      <div className="main">
        <div className={`row ${styles.header}`}>
          <h1>ห้องเลขที่ 101 VIP Suite</h1>
          <div className={`row ${styles.grpBtn}`}>
            {mode === 'view' && (
              <ButtonComponent
                _type="button"
                _color="#3B76EF"
                _variant="contained"
                _text="แก้ไขข้อมูล"
                _isIcon={false}
                _functionOnClick={() => setMode('edit')}
              />
            )}
            {mode === 'edit' && (
              <>
                <ButtonComponent
                  _type="button"
                  _color="#FFFFFF"
                  _variant="outlined"
                  _text="ยกเลิก"
                  _isIcon={false}
                  _functionOnClick={() => setMode('view')}
                />
                <ButtonComponent
                  _type="button"
                  _color="#01BD44"
                  _variant="contained"
                  _text="บันทึก"
                  _isIcon={false}
                  _functionOnClick={() => handleSubmit()}
                />
              </>
            )}
          </div>
        </div>
        <div className={`row ${styles.wrapper}`}>
          <div className={styles.leftInput}>
            <div className={`row ${styles.groupInput}`}>
              <div className={styles.lableText}>
                <p>วันที่ :</p>
                <label>(Date)</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="date"
                  value={values.date_entry}
                  onChange={(e) => setValues({ ...values, date_entry: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>

            <div className={`row ${styles.groupInput}`}>
              <div className={styles.lableText}>
                <p>พยาบาลผู้ดูแล :</p>
                <label>(Charge nurse)</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  value={values.charge_nurse}
                  onChange={(e) => setValues({ ...values, charge_nurse: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>

            <div className={`row ${styles.groupInput}`}>
              <div className={styles.lableText}>
                <p>เป้าหมายวันนี้ :</p>
                <label>(Goals for today)</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  value={values.goal_for_today}
                  onChange={(e) => setValues({ ...values, goal_for_today: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>

            <div className={`row ${styles.blueBox}`}>
              <p>การควบคุมความเจ็บปวดประจำสม่ำเสมอ</p>
              <p>คือเป้าหมายของเรา</p>
              <span>Pain management is our goal always!</span>
            </div>

            <div className={`col align-items-center`}>
              <h3 className={styles.levelPainful}>ระดับคะแนนความเจ็บปวด</h3>
              <p className={styles.levelPainfulHint}>(Wong-Baker FACES Pain Rating Scale)</p>
            </div>

            <div className={`row ${styles.statusBox}`}>
              <img src={Level1SVG} alt="Level1SVG" />
              <div className={styles.groupTextStatus}>
                <p>ไม่มีอาการ</p>
                <p>No Hurt</p>
              </div>
            </div>

            <img className={styles.allLevelImg} src={AllLevelSVG} alt="AllLevelSVG" />
          </div>

          <div className={styles.rightInput}>
            <img className={styles.image1Img} src={Img1SVG} alt="Img1SVG" />

            <div className={`row ${styles.groupInputTextArea}`}>
              <div className={styles.lableText}>
                <p>ข้อควรระวัง :</p>
                <label>(Precaution)</label>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  rows={2}
                  value={values.precaution}
                  onChange={(e) => setValues({ ...values, precaution: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>

            <div className={`row ${styles.groupInputTextArea}`}>
              <div className={styles.lableText}>
                <p>ความต้องการพิเศษของผู้ป่วย :</p>
                <label>(Special needs)</label>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  rows={2}
                  value={values.special_needs}
                  onChange={(e) => setValues({ ...values, special_needs: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>

            <div className={`row ${styles.groupInputTextArea}`}>
              <div className={styles.lableText}>
                <p>หากมีข้อเสนอแนะเพิ่มเติมสามารถติดต่อหัวหน้าแผนก :</p>
                <label>(For any comment please contact head of department)</label>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  rows={2}
                  value={values.comment}
                  onChange={(e) => setValues({ ...values, comment: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>

            <div className={`row ${styles.groupInputTextArea}`}>
              <div className={styles.lableText}>
                <p>คำถามที่ต้องการถามแพทย์ :</p>
                <label>(Any question ask your doctor)</label>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  rows={2}
                  value={values.any_question}
                  onChange={(e) => setValues({ ...values, any_question: e.target.value })}
                  disabled={mode === 'view' ? true : false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
