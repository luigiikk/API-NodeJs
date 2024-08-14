import { randomUUID } from "node:crypto"

export class memory {
  #videos = new Map();

  list(){
    return this.#videos.values()
  }

  create(video) {
    const videoId = randomUUID() // sempre vai retornar um id unico

    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id){
    this.#videos.delete(id)
  }
}
