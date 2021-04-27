const axios = require('axios')
const url =
  'https://www.pearvideo.com/videoStatus.jsp?contId=1723115&mrd=0.6892917494882969'

axios
  .get(url, {
    headers: {
      referer: 'https://www.pearvideo.com/video_1723115',
      origin: 'https://www.pearvideo.com/',
      //   Cookie:
      //     '__secdyid=fc97bf834d6cdd028b2342fa143b9a1824704c0523181584021618384388; JSESSIONID=7705C6A14367A20A9A33AE79F8F5715B; PEAR_UUID=9a35d59f-cc71-4784-9d3e-81049d29686d; _uab_collina=161838438884319894625733; p_h5_u=E1924018-287B-4604-8A59-ABEA0B63D6C9; Hm_lvt_9707bc8d5f6bba210e7218b8496f076a=1618384392; UM_distinctid=178cf3a108f41d-046ace9a9939df-13e3563-1fa400-178cf3a10908ef; CNZZDATA1260553744=946639687-1618382402-%7C1618385273; acw_tc=781bad0916183862339363356e1ef9ce733620d999bab261b3778937423a0c; Hm_lpvt_9707bc8d5f6bba210e7218b8496f076a=1618386288; SERVERID=a6169b2e0636a71b774d6641c064eb8c|1618386666|1618384388',
    },
  })
  .then((res) => {
    console.log(res.data)
  })

//   contAndId = "cont-" + contId,
