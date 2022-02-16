/**
 * 
 * Author: MrDark
 * current it works on GEt Method And does not throw cors error
 * copyright: MrDark
 * 
 * 
 */

const XhrApiCall = (method, url, body, header) => {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.responseType = "json";

      if (body) {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("accept", "*/*");
        xhr.setRequestHeader("Access-Control-Allow-Credentials", true);
        xhr.setRequestHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, HEAD, OPTIONS"
        );
        if (header) {
          xhr.setRequestHeader(header.value, header.content);
        }
      }

      xhr.onerror = () => {
        reject(
          `Error is thrown from XMLHttpRequest due to ${method} Method not able to work due to some reason`
        );
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.send(JSON.stringify(body));
    } catch (error) {
      return reject(error);
    }
  });
};

export default XhrApiCall;
