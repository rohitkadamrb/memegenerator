import React  , {useState }from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import {useClipboard} from 'use-clipboard-copy'
export const MemeGenerated = () => {
 const [copied, setCopied] = useState(false)
  const history = useHistory();
  const location = useLocation();
  const clipboard = useClipboard();
  const copyLink=() => {
    clipboard.copy(url);
    setCopied(true);
  }
  const url = new URLSearchParams(location.search).get('url');
  return (
    <div className={styles.container}>
  
      <button onClick={() => history.push('/')} className={styles.home}>
        Make More Memes
      </button>
            { url && <img src={url} alt=''></img>}
            <button onClick={copyLink} className={styles.copy}>
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
            
    </div>

  )
}
